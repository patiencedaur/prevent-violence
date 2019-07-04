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
# Doesn't work with Ep1 somehow... gets empty label names. Whitespace? FIX

labels = []

folder = 'dist/js'
mask = '^(?:(?!options)(?!main)(?!storage).)*?\.js$'
files = []

regex_jump = 'jump \w+'
regex_label = 'monogatari\.label\s?\(.*?\]\);'
regex_script = 'monogatari\.script\s?\(\{.*?\}\);'
# patterns like 'label_name': [something]
regex_start_parts = '(?:\"|\')\w+(?:\"|\')\:\s\[.*?\]'

def read_file(folder, file):
    """
    Read file contents and strip it of whitespace.
    """
    with open(os.path.join(folder, file)) as f:
        contents = f.read()
    return ''.join(re.split(r'\t|\n', contents))


def get_regular_label(label):
    """
    monogatari.label('name', [content])
    """
    label_content = label.group().split('monogatari.label')[1]
    label_name = label_content[2:].split('\'')[0]
    jumps = re.findall(regex_jump, label_content)
    jump_names = [j[5:] for j in jumps]
    return (label_name, jump_names)


def get_start_label(label):
    """
    Starting labels look somewhat different:
    monogatari.script({'name': [content], 'name2': [more_content]});
    """
    label_name = label.group().split('"')[1]
    jumps = re.findall(regex_jump, label.group())
    jump_names = [j[5:] for j in jumps]
    return (label_name, jump_names)


for file in os.listdir(folder):
    if re.fullmatch(mask, file):
        no_spaces = read_file(folder, file)
        if file == 'temp.js':
            print(no_spaces)

        if file == 'script.js':
            starting_script = re.findall(regex_script, no_spaces)[0] # one and only
            for label in re.finditer(regex_start_parts, starting_script):
                node = get_start_label(label)
                labels.append(node)
                print(node)

        for label in re.finditer(regex_label, no_spaces):
            node = get_regular_label(label)
            labels.append(node)
            # if file == 'temp.js':
            print(node)


# print(labels)
