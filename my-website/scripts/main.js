import hamburger from "./hamburger.mjs";
import footer from "./footer.mjs";
import animate from "./animate.mjs";
import { play, nextPlay, previousPlay} from "./slider.mjs";


hamburger();
footer();
animate(".hero, .first, .about, .started, .started div, .about div");
play();
nextPlay();
previousPlay();
