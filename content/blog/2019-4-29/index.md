---
slug: shortcuts-pythonista
date: 2019-04-29
title: 'Using iOS Shortcuts App and Pythonista'
categories: ["ios", "python"]
description: 'Using iOS Shortcuts App and Pythonista'
published: false
banner: './david-clode-460835-unsplash.jpg'
bannerCredit: 'Photo by David Clode on Unsplash'

---

## tldr;

- [Download/Buy](https://omz-software.com/pythonista/) Pythonista for iOS.
- Create script in Shortcut App to take in input(s) and save them as a variable(s).
- Use the URL action to open pythonista with the script name and variables you want to pass into the script.
- Write script to take in those variables do what you want to them and save them to the iOS clipboard.

## Background

I recently found myself replying to several emails with the same boilerplate copy just with some names and details changed. After replying to a couple of them I got tired and decided I wanted to just use the Shortcuts app to store the saved boilerplate and replace the details with some inputs I would provide.

I have a love/hate relationship with Shorcuts. The scripting tool always seems like a good idea to use but for someone who spends most of the day coding on a keyboard I find the drag and drop nature of building the workflows pretty tedious. I'd rather just bang out the script in a text editor and use that with the inputs I provide to Shortcuts. Enter Pythonista 3.

Pythonista 3 is an app I never use. It's very highly rated and last year when I was deep in a project that needed python I bought it thinking it might help me code. But as mentioned before, coding on my ipad or iphone is just too tedious for me. So it's mostly been unused. Until now!

## Python Code

```python
import sys, clipboard, webbrowser

name = sys.argv[1]
date = sys.argv[2]
text = ''

if name:
  text = 'Hey {}!\n '.format(name)

if date:
  text += 'Unfortunately I won\'t be free on {}.'.format(date)
else:
  text += 'Do you have an ETA on when the package will arrive?'

clipboard.set(text)

webbrowser.open('readdle-spark://')
```

<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@davidclode?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from David Clode"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">David Clode</span></a>
