import reactRefresh from "@vitejs/plugin-react-refresh";
import path from 'path';
import {defineConfig} from "vite";
import {getAliases} from "vite-aliases";

const aliases = getAliases();

export default defineConfig({
  root : path.resolve(__dirname, "../"),
  base : "/openvtuber/",
  publicDir : path.resolve(__dirname, "../public"),
  plugins : [ reactRefresh() ],
  resolve : {
    alias : aliases,
  },
  build : {
    emptyOutDir : true,
    outDir : path.resolve(__dirname,
                          '../../openvtuber-server/src/openvtuber/client'),
  },
  server : {port : 8080}
});
