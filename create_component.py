#!/usr/bin/python3

import sys
import os


def get_name_from_stdib():
    name = input('What is the name of the component?\n> ').strip()
    if len(name) == 0:
        sys.stderr.write('Must have name. Try again\n')
        sys.exit(-1)

    return name


name = ''
if len(sys.argv) > 1:
    name = sys.argv[1]
else:
    name = get_name_from_stdib()

name = name[0].title() + name[1:]

# check if compoenent exists
comp_path = './src/components/' + name
if os.path.isdir(comp_path):
    sys.stderr.write(
        'Component with that name already exists. Try another name\n')
    sys.exit(-1)

# create component directory
os.makedirs(comp_path)

# add index.ts
index_content = """import {} from './{}';
 
export default {};
""".format(name, name, name)
file = open(comp_path+'/index.ts', "w")
file.write(index_content)
file.close()

# add component file
comp_content = """import * as React from 'react';
import {{ View }} from 'react-native';

import styles from './styles';

const {} = (props: {{}}) => (
  <View style={{styles.container}}>
  </View>
);
 export default {};
""".format(name, name)
file = open(comp_path + '/' + name + '.tsx', "w")
file.write(comp_content)
file.close()

test_content = """import * as React from 'react';
import {} from './';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {{
  const rendered = renderer.create(<{} />).toJSON();
  expect(rendered).toBeTruthy();
}});

""".format(name, name)
file = open(comp_path + '/' + name + '.test.tsx', "w")
file.write(test_content)
file.close()

styles_content = """import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
});
"""
file = open(comp_path + '/styles.ts', "w")
file.write(styles_content)
file.close()

print("Component: {} has been created".format(name))
