# Build Instructions

To build the provided C++ project into WebAssembly using Emscripten, follow these steps. Ensure you have Emscripten installed and configured on your system. If you haven't installed Emscripten yet, follow the [official installation guide](https://emscripten.org/docs/getting_started/downloads.html).

1. **Compile the C++ Code**: Run the following command to compile your C++ code (`mainWASM.cpp`) into WebAssembly. This command uses the `--bind` option to enable binding support, sets optimization level with `-O3`, and configures the output to use ES6 modules and modularize the output for easier import into JavaScript projects.

   ```bash

   emcc --bind -O3 mainWASM.cpp -s MODULARIZE=1 -s EXPORT_ES6=1 -o mainWASM.js

   ```

```
   - `--bind`: Enables Emscripten's binding generation, allowing complex types to be passed between C++ and JavaScript.
   - `-O3`: Applies high-level optimizations to make your code run faster at the cost of longer compilation time.
   - `-s MODULARIZE=1`: Wraps the output in a JavaScript module, which can be imported using ES6 import syntax.
   - `-s EXPORT_ES6=1`: Generates ES6 JavaScript code, enabling the use of modern JavaScript features and import/export statements.
   - `-o mainWASM.js`: Specifies the output file name. This command generates `mainWASM.js` and `mainWASM.wasm`. The `.js` file acts as a loader for the `.wasm` binary.
```
