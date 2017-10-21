import * as path from "path";

export const ENGINE_NAME = "k2d";
export const CURRENT_PATH = process.cwd();
export const TEMP_PATH = path.join(CURRENT_PATH, ".tmp");
export const TEMP_BUILD_PATH = path.join(TEMP_PATH, "./build");
export const ENGINE_PATH = path.resolve(__dirname, "../../");
export const KHA_PATH = path.join(ENGINE_PATH, "Kha");
export const KHA_MAKE_PATH = path.join(KHA_PATH, "make.sh");
export const HAXE_PATH = path.join(KHA_PATH, "Tools", "haxe");