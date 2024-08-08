module.exports = {
	name: "alexandremouriec.com", // optional, falls back to object key
	description: "Alexandre Mouriec’s Personal web site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 24 * 14, // Every  2 weeks
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://www.alexandremouriec.com/",
		"https://www.alexandremouriec.com/about/",
		"https://www.alexandremouriec.com/blog/",
		"https://www.alexandremouriec.com/work/",
		"https://www.alexandremouriec.com/projects/",
		"https://www.alexandremouriec.com/colophon/",
		// Popular Posts
		"https://www.zachleat.com/blog/new-website/",
	]
};
