import axios from "axios"

const getRemoteOkJobs = () => {
    axios.get('https://remoteok.io/api')
        .then((res) => {
            res.data.forEach(job => {
                console.log(job.company)
            });
        })
}

export default getRemoteOkJobs;