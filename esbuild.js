const esbuild = require("esbuild")

// prettier-ignore
async function run() {
	const service = await esbuild.startService()

	try {
		const result = await service.build({
			bundle: true,
			entryPoints: ["src.js"],
			incremental: true,
			outfile: "dst.esbuild.js",
		})
		console.log("result=", { result })
	}

	catch (err) {
		console.log("err=", { err })
	}

	finally {
		service.stop()
	}
}

run()
