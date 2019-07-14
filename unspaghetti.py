import re
import os

"""
1 find anything that looks like
monogatari.label('label1', [something]);
OR
monogatari.script({'label2': [something], 'label2': [something]});

2 make [(label1, [something]), (label2, [something])...]

3 get all "jump label_name" from [something]'s

4 organize it into [(label1, [list_of_jumps]), (label2, [list_of_jumps])...]

5 ...graph!
"""

folder = 'dist/js'
# Only look for story scripts in this folder
file_mask = '^(?:(?!options)(?!main)(?!storage).)*?\.js$'

# Regular Expressions #

# jump directive with next label name
regex_jump = 'jump \w+'
# monogatari.label(SOMETHING]);
# Do not use spaces before the opening bracket after monogatari.label in the code
# it doesn't work for whatever reason
regex_label = 'monogatari\.label\s?\(.*?\]\);?'
# monogatari.script({SOMETHING});
regex_script = 'monogatari\.script\s?\(\{.*?\}\);'
# patterns like 'label_name': [something], encountered in the Start section
regex_start_parts = '(?:\"|\')\w+(?:\"|\')\:\s\[.*?\]'

# Data Extraction #

def read_file(folder, file):
    """
    Read file contents and strip it of whitespace.
    """
    with open(os.path.join(folder, file)) as f:
        contents = f.read()
    return ''.join(re.split(r'\t|\n', contents))

def regular_labels(file_no_spaces):
    """
    Return an iterator over labels in regularly formatted files
    (not like the Start label in script.js).
    """
    return re.finditer(regex_label, file_no_spaces)

def start_labels(script_file_no_spaces):
    """
    Return an iterator over labels used in the start script.
    Only applicable to the file called script.js
    (because it is the only one using monogatari.script()-formatted labels).
    """
    # extract the "Start" script from the file, omitting other functions etc.
    starting_script = re.findall(regex_script, script_file_no_spaces)[0]
    # iterate over labels
    return re.finditer(regex_start_parts, starting_script)


def parse_start(label):
    """
    Starting labels look somewhat different:
    monogatari.script({'name': [content], 'name2': [more_content]});
    Parse a label like this and return (name, [where it jumps to]).
    """
    label_name = label.group().split('"')[1]
    jumps = re.findall(regex_jump, label.group())
    jump_names = [j[5:] for j in jumps]
    return (label_name, jump_names)

def parse_regular(label):
    """
    Parse a string like monogatari.label('name', [content]).
    Return (name, [where it jumps to]).
    """
    label_content = label.group().split('monogatari.label')[1]
    label_name = label_content[2:].split('\'')[0]
    jumps = re.findall(regex_jump, label_content)
    jump_names = [j[5:] for j in jumps]
    return (label_name, jump_names)

def scenario_schema(folder):
    """
    Parse all script files in the folder.
    Return a list of nodes like (label, [jump points]).
    """
    schema = {}
    for file in os.listdir(folder): # run through the folder
        if re.fullmatch(file_mask, file): # find only script-related js files
            no_spaces = read_file(folder, file)
            file_labels = [] # a list of tuples for each file
            if file == 'script.js': # parse and add 'start'-formatted labels
                for label in start_labels(no_spaces):
                    node = parse_start(label)
                    file_labels.append(node)
            for label in regular_labels(no_spaces): # parse and append the rest
                node = parse_regular(label)
                file_labels.append(node)
            schema[file] = file_labels
    return schema

def print_schema(folder):
    schema = scenario_schema(folder)
    for file in schema.keys():
        print(file)
        print(schema[file])
        print()

# Create a file for Viz.js #

def viz_js(schema):
    """
    Generate a file to export to Viz.js:
    label1 -> jump11, label1 -> jump12, label1 -> jump13...
    label2 -> jump21, label3 -> jump22...
    """
    colors = ['yellow', 'green', 'pink', 'lightblue', 'orange', 'grey']
    subgraph = """
    subgraph %FILENAME% {
    	node [style=filled,color=%COLOR%];
    	%NODES%
    	label = %FILENAME%;
    }
"""
    with open('viz.txt', 'w') as f:
        # begin
        f.write("digraph G {\n")
        # create a subgraph for each file in the scenario
        for file in schema.keys():
            pass
        f.write(subgraph)
        # Display 'end' node
        f.write("\n\tend [shape=Msquare];\n}")

schema = scenario_schema(folder)
viz_js(schema)
