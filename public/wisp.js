import { Wisp } from "@mercuryworkshop/wisp-js";

const wisp = new Wisp({
    bare: "https://malware.wtf/bare/", // working public bare server
    encoding: "xor"
});

export default wisp;
