var exec = require('child_process').exec;

const mergeFiles = async (bankFilesUrl, mergedFileUrl) => {
    dir = await exec(`cat ${bankFilesUrl}/*.csv > ${mergedFileUrl}/data.csv`, function (err, stdout, stderr) {
        if (err) {
            console.log(err)
        }
        console.log(stdout);
    });

    dir.on('exit', function (code) {
        console.log('Merged success - exit code: ', code)
    });
}

module.exports = { mergeFiles }
