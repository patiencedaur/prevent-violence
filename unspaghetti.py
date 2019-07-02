import re

# 1 find anything that looks like
# monogatari.label('label1', [something]);
# OR
# monogatari.script({'label2': [something], 'label2': [something]});
#
# 2 make [(label1, [something]), (label2, [something])...]
#
# 3 get all "jump label_name" from [something]'s
#
# 4 organize it into [(label1, [list_of_jumps]), (label2, [list_of_jumps])...]
#
# 5 ...graph!

with open('script.js') as file:
    contents = file.read()
no_spaces = ''.join(re.split(r'\t|\n', contents))

labels = []

regex_jump = 'jump \w+'

# parse monogatari.label('name', [content])
regex_label = 'monogatari\.label\s?\(.*?\]\);'
for label in re.finditer(regex_label, no_spaces):
    label_content = label.group().split('monogatari.label')[1]
    label_name = label_content[2:].split('\'')[0]
    jumps = re.findall(regex_jump, label_content)
    jump_names = [j[5:] for j in jumps]
    labels.append((label_name, jump_names))

# separately parse
# monogatari.script({'name': [content], 'name2': [more_content]});
regex_script = 'monogatari\.script\s?\(\{.*?\}\);'
starting_script = re.findall(regex_script, no_spaces)[0] # one and only

# find patterns like 'label_name': [something]
regex_start_parts = '(?:\"|\')\w+(?:\"|\')\:\s\[.*?\]'
for label in re.finditer(regex_start_parts, starting_script):
    label_name = label.group().split('"')[1]
    jumps = re.findall(regex_jump, label.group())
    jump_names = [j[5:] for j in jumps]
    labels.append((label_name, jump_names))

print(labels)
