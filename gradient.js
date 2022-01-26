"use strict";

class Gradient {
	constructor() {}

	/**
	 * An object that stores the rgb values of every JS color name.
	 */
	static colorKeyMap = {
		black: [0, 0, 0, 1],
		silver: [192, 192, 192, 1],
		gray: [128, 128, 128, 1],
		white: [255, 255, 255, 1],
		maroon: [128, 0, 0, 1],
		red: [255, 0, 0, 1],
		purple: [128, 0, 128, 1],
		fuchsia: [255, 0, 255, 1],
		green: [0, 128, 0, 1],
		lime: [0, 255, 0, 1],
		olive: [128, 128, 0, 1],
		yellow: [255, 255, 0, 1],
		navy: [0, 0, 128, 1],
		blue: [0, 0, 255, 1],
		teal: [0, 128, 128, 1],
		aqua: [0, 255, 255, 1],
		aliceblue: [240, 248, 255, 1],
		antiquewhite: [250, 235, 215, 1],
		aqua: [0, 255, 255, 1],
		aquamarine: [127, 255, 212, 1],
		azure: [240, 255, 255, 1],
		beige: [245, 245, 220, 1],
		bisque: [255, 228, 196, 1],
		black: [0, 0, 0, 1],
		blanchedalmond: [255, 235, 205, 1],
		blue: [0, 0, 255, 1],
		blueviolet: [138, 43, 226, 1],
		brown: [165, 42, 42, 1],
		burlywood: [222, 184, 135, 1],
		cadetblue: [95, 158, 160, 1],
		chartreuse: [127, 255, 0, 1],
		chocolate: [210, 105, 30, 1],
		coral: [255, 127, 80, 1],
		cornflowerblue: [100, 149, 237, 1],
		cornsilk: [255, 248, 220, 1],
		crimson: [220, 20, 60, 1],
		cyan: [0, 255, 255, 1],
		darkblue: [0, 0, 139, 1],
		darkcyan: [0, 139, 139, 1],
		darkgoldenrod: [184, 134, 11, 1],
		darkgray: [169, 169, 169, 1],
		darkgreen: [0, 100, 0, 1],
		darkgrey: [169, 169, 169, 1],
		darkkhaki: [189, 183, 107, 1],
		darkmagenta: [139, 0, 139, 1],
		darkolivegreen: [85, 107, 47, 1],
		darkorange: [255, 140, 0, 1],
		darkorchid: [153, 50, 204, 1],
		darkred: [139, 0, 0, 1],
		darksalmon: [233, 150, 122, 1],
		darkseagreen: [143, 188, 143, 1],
		darkslateblue: [72, 61, 139, 1],
		darkslategray: [47, 79, 79, 1],
		darkslategrey: [47, 79, 79, 1],
		darkturquoise: [0, 206, 209, 1],
		darkviolet: [148, 0, 211, 1],
		deeppink: [255, 20, 147, 1],
		deepskyblue: [0, 191, 255, 1],
		dimgray: [105, 105, 105, 1],
		dimgrey: [105, 105, 105, 1],
		dodgerblue: [30, 144, 255, 1],
		firebrick: [178, 34, 34, 1],
		floralwhite: [255, 250, 240, 1],
		forestgreen: [34, 139, 34, 1],
		fuchsia: [255, 0, 255, 1],
		gainsboro: [220, 220, 220, 1],
		ghostwhite: [248, 248, 255, 1],
		gold: [255, 215, 0, 1],
		goldenrod: [218, 165, 32, 1],
		gray: [128, 128, 128, 1],
		green: [0, 128, 0, 1],
		greenyellow: [173, 255, 47, 1],
		grey: [128, 128, 128, 1],
		honeydew: [240, 255, 240, 1],
		hotpink: [255, 105, 180, 1],
		indianred: [205, 92, 92, 1],
		indigo: [75, 0, 130, 1],
		ivory: [255, 255, 240, 1],
		khaki: [240, 230, 140, 1],
		lavender: [230, 230, 250, 1],
		lavenderblush: [255, 240, 245, 1],
		lawngreen: [124, 252, 0, 1],
		lemonchiffon: [255, 250, 205, 1],
		lightblue: [173, 216, 230, 1],
		lightcoral: [240, 128, 128, 1],
		lightcyan: [224, 255, 255, 1],
		lightgoldenrodyellow: [250, 250, 210, 1],
		lightgray: [211, 211, 211, 1],
		lightgreen: [144, 238, 144, 1],
		lightgrey: [211, 211, 211, 1],
		lightpink: [255, 182, 193, 1],
		lightsalmon: [255, 160, 122, 1],
		lightseagreen: [32, 178, 170, 1],
		lightskyblue: [135, 206, 250, 1],
		lightslategray: [119, 136, 153, 1],
		lightslategrey: [119, 136, 153, 1],
		lightsteelblue: [176, 196, 222, 1],
		lightyellow: [255, 255, 224, 1],
		lime: [0, 255, 0, 1],
		limegreen: [50, 205, 50, 1],
		linen: [250, 240, 230, 1],
		magenta: [255, 0, 255, 1],
		maroon: [128, 0, 0, 1],
		mediumaquamarine: [102, 205, 170, 1],
		mediumblue: [0, 0, 205, 1],
		mediumorchid: [186, 85, 211, 1],
		mediumpurple: [147, 112, 219, 1],
		mediumseagreen: [60, 179, 113, 1],
		mediumslateblue: [123, 104, 238, 1],
		mediumspringgreen: [0, 250, 154, 1],
		mediumturquoise: [72, 209, 204, 1],
		mediumvioletred: [199, 21, 133, 1],
		midnightblue: [25, 25, 112, 1],
		mintcream: [245, 255, 250, 1],
		mistyrose: [255, 228, 225, 1],
		moccasin: [255, 228, 181, 1],
		navajowhite: [255, 222, 173, 1],
		navy: [0, 0, 128, 1],
		oldlace: [253, 245, 230, 1],
		olive: [128, 128, 0, 1],
		olivedrab: [107, 142, 35, 1],
		orange: [255, 165, 0, 1],
		orangered: [255, 69, 0, 1],
		orchid: [218, 112, 214, 1],
		palegoldenrod: [238, 232, 170, 1],
		palegreen: [152, 251, 152, 1],
		paleturquoise: [175, 238, 238, 1],
		palevioletred: [219, 112, 147, 1],
		papayawhip: [255, 239, 213, 1],
		peachpuff: [255, 218, 185, 1],
		peru: [205, 133, 63, 1],
		pink: [255, 192, 203, 1],
		plum: [221, 160, 221, 1],
		powderblue: [176, 224, 230, 1],
		purple: [128, 0, 128, 1],
		red: [255, 0, 0, 1],
		rosybrown: [188, 143, 143, 1],
		royalblue: [65, 105, 225, 1],
		saddlebrown: [139, 69, 19, 1],
		salmon: [250, 128, 114, 1],
		sandybrown: [244, 164, 96, 1],
		seagreen: [46, 139, 87, 1],
		seashell: [255, 245, 238, 1],
		sienna: [160, 82, 45, 1],
		silver: [192, 192, 192, 1],
		skyblue: [135, 206, 235, 1],
		slateblue: [106, 90, 205, 1],
		slategray: [112, 128, 144, 1],
		slategrey: [112, 128, 144, 1],
		snow: [255, 250, 250, 1],
		springgreen: [0, 255, 127, 1],
		steelblue: [70, 130, 180, 1],
		tan: [210, 180, 140, 1],
		teal: [0, 128, 128, 1],
		thistle: [216, 191, 216, 1],
		tomato: [255, 99, 71, 1],
		turquoise: [64, 224, 208, 1],
		violet: [238, 130, 238, 1],
		wheat: [245, 222, 179, 1],
		white: [255, 255, 255, 1],
		whitesmoke: [245, 245, 245, 1],
		yellow: [255, 255, 0, 1],
		yellowgreen: [154, 205, 50, 1],
	};

	/**
	 *
	 * @param {string} color - The color to convert to rgba format. "rgba(num, num, num, num)"
	 */
	static convertToRGBA(color) {
		if (!color) return;
		if (color.toLowerCase() === "transparent") return [0, 0, 0, 0];
		if (color[0] === "#") {
			if (color.length < 7) {
				// convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
				color =
					"#" +
					color[1] +
					color[1] +
					color[2] +
					color[2] +
					color[3] +
					color[3] +
					(color.length > 4 ? color[4] + color[4] : "");
			}
			return [
				parseInt(color.substr(1, 2), 16),
				parseInt(color.substr(3, 2), 16),
				parseInt(color.substr(5, 2), 16),
				color.length > 7 ? parseInt(color.substr(7, 2), 16) / 255 : 1,
			];
		}
		if (color.indexOf("rgb") === -1) {
			if (!color.includes("hsl")) {
				return this.colorKeyMap[color];
			} else {
				const hsl = /(hsl\((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360),(?:\s|)(?:[0-9]|[1-9][0-9]|100)%),(?:\s|)(?:[0-9]|[1-9][0-9]|100)%\)/gim;
				let vals;
				if (color.match(hsl)) {
					vals = color.replace("hsl(", "").replace(")", "").split(", ");	
					
					let h = +vals[0];
					let s = +vals[1].replace("%", "");
					let l = +vals[2].replace("%", "");

					s /= 100;
					l /= 100;

					let c = (1 - Math.abs(2 * l - 1)) * s;
					let x = c * (1 - Math.abs((h / 60) % 2 - 1));
					let m = l - c/2;
					
					let r = 0;
					let g = 0;
					let b = 0;

					if (0 <= h && h < 60) {
						r = c; g = x; b = 0;  
					} else if (60 <= h && h < 120) {
						r = x; g = c; b = 0;
					} else if (120 <= h && h < 180) {
						r = 0; g = c; b = x;
					} else if (180 <= h && h < 240) {
						r = 0; g = x; b = c;
					} else if (240 <= h && h < 300) {
						r = x; g = 0; b = c;
					} else if (300 <= h && h < 360) {
						r = c; g = 0; b = x;
					}
				
					r = Math.round((r + m) * 255);
					g = Math.round((g + m) * 255);
					b = Math.round((b + m) * 255);

					return [r, g, b, 0];
				}
			}
		}
		if (color.indexOf("rgb") === 0) {
			if (color.indexOf("rgba") === -1) color += ",1"; // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below
			return color.match(/[\.\d]+/g).map(function (a) {
				return +a;
			});
		}

		throw new Error(`[gradient.js] Given color "${color}" has bad syntax.`)
	}

	/**
	 * Creates a formatted CSS-compatible string from an array of RGBA values.
	 * @param {[number, number, number, number]} rgba - The inputted array of values.
	 * @returns {string} - A nicely formatted string of the rgba value. Compatible with CSS.
	 */
	static rgbaStyler(rgba) {
		return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
	}

	/**
	 * Creates a gradient between (x) amount of colors. Input the resolution followed by the colors.
	 * @param {number} resolution - The number of colors in-between each main color.
	 * @returns {[...String]} gradient - The array of gradient colors.
	 */
	static create(resolution = 10) {
		const colors = [...arguments];
		if (colors[0] === resolution) colors.shift();

		// Convert the colors to rgba.
		for (let i = 0; i < colors.length; i++) {
			colors[i] = this.convertToRGBA(colors[i]);
		}

		console.log(colors)

		const gradient = [];

		for (let i = 0; i < colors.length; i++) {
			// Push the current color.
			const color = colors[i];
			// gradient.push(this.rgbaStyler(color));

			// Find the next color.
			const nextColor = colors[i + 1];

			// Ensure it is defined. If it isn't, then we are on the last color, so we can end.
			if (nextColor === undefined) {
				break;
			}

			// All the in-between values.
			for (let i = 0; i < resolution; i++) {
				// console.log(i);
				const thisColor = [
					(
						color[0] +
						((nextColor[0] - color[0]) * i) / resolution
					).toFixed(2),
					(
						color[1] +
						((nextColor[1] - color[1]) * i) / resolution
					).toFixed(2),
					(
						color[2] +
						((nextColor[2] - color[2]) * i) / resolution
					).toFixed(2),
					(
						color[3] +
						((nextColor[3] - color[3]) * i) / resolution
					).toFixed(2),
				];

				gradient.push(this.rgbaStyler(thisColor));
			}
		}

		return gradient;
	}
}

module.exports = {
	Gradient,
	printMsg: function () {
		console.log("this is a test from gradient.js");
	},
};
