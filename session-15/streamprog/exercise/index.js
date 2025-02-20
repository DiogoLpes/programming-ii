
import { Transform } from "./stream.js";

const file = "access.log";

const transform = new Transform(file);

transform.start();