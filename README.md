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

### Example of using midsi commands

If you have not yet started an instance of the midsi server, you can start using the command `WSML: Midsi - Start Midsi server`. Likewise when you are no longer using the server, just use the command `WSML: Midsi - Close Midsi server`. To clear the uploaded data just close and start right away.

<img src="https://github.com/devdaniellima/wsml-vscode/blob/master/images/start_close_midsi.gif?raw=true" />

With the ontology file open you can add it to the scope of the midsi with the command `WSML: Midsi - Load a ontology`.

<img src="https://github.com/devdaniellima/wsml-vscode/blob/master/images/load_ontology.gif?raw=true" />

To make inquiries you can use the command `WSML: Midsi - Execute a query`.

<img src="https://github.com/devdaniellima/wsml-vscode/blob/master/images/execute_query.gif?raw=true" />

It is also possible to ask questions from `.wsml` files with a query using the command `WSML: Midsi - Execute this query file`.

<img src="https://github.com/devdaniellima/wsml-vscode/blob/master/images/execute_query_file.gif?raw=true" />

## Known Issues

- Developing but functional.
- Any problems, please report this in the extension repository.

## References

- Icons, syntax and grammar refer to the work submitted in
  - [https://www.w3.org/Submission/WSML](https://www.w3.org/Submission/WSML)
  - [http://www.wsmo.org/wsml](http://www.wsmo.org/wsml)
