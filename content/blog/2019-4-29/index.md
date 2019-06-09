---
slug: shortcuts-pythonista
date: 2019-04-29
title: 'Using iOS Shortcuts App and Pythonista'
categories: ["ios", "python"]
description: 'How to use the iOS Shortcuts App with Pythonista'
published: true
banner: './david-clode-460835-unsplash.jpg'
bannerCredit: 'Photo by David Clode on Unsplash'

---

## Summary

- <a href="https://omz-software.com/pythonista/" target="_blank">Purchase</a> Pythonista for iOS.
- Create a script in the Shortcuts App to take in an input or inputs and save them as variable(s). Pass those variables into an URL action that will open Safari with the Pythonista url scheme.
- Create a Python script in Pythonista to receive those variables and process them as you like then save them to the iOS clipboard.

## Shortcuts Script

Here's a simple script that takes a date and name input and sends them to a Pythonista script saved to my iCloud account. Each of the inputs are saved to a variable which is used as a value of an `argv` query parameter. Note that the order of the `arvs` query parameters matter. See the python script to see how they're used. The URL is built up like this: `pythonista3://myPythonScript?action=run&root=icloud&argv=Name&argv=Date` where 'myPythonScript' is the name of the script in Pythonista, and 'Name' and 'Date' are the variables from the Shortcuts script.

![alt text](/shortcuts.jpg "Shortcut screenshot")


## Python Code

```python
# myPythonScript.py
import sys, clipboard

name = sys.argv[1]
date = sys.argv[2]
text = ''

if name:
  text = 'Hi {}! '.format(name)

if date:
  text += 'Are you free on {}?'.format(date)


clipboard.set(text)
```
