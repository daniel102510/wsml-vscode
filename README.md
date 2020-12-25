# WSML Language Basics

## About

Provides syntax highlighting and bracket matching for WSML files. It also has integrated controls for the Midsi inference engine.

## Features

### Coding with style

<img src="https://github.com/devdaniellima/wsml-vscode/blob/master/images/example.png?raw=true" />

### Integration with **Midsi** inference engine

- Clone the project https://github.com/devdaniellima/midsi and run your `install.sh` with sudo.
- Set the vscode options to the path of the previously cloned **Midsi** project.
  ```json
  {
    "wsml.midsi.path": "/home/daniel/Documents/midsi"
  }
  ```
- You can use the commands for Midsi in the palette.
  <img src="https://github.com/devdaniellima/wsml-vscode/blob/master/images/pallet_commands.gif?raw=true" />

## Known Issues

- Developing but functional.
- Any problems, please report this in the extension repository.

## References

- Icons, syntax and grammar refer to the work submitted in
  - [https://www.w3.org/Submission/WSML](https://www.w3.org/Submission/WSML)
  - [http://www.wsmo.org/wsml](http://www.wsmo.org/wsml)
