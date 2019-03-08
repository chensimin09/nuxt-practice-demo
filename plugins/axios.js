const reqConfig = {
  timeout: 1000
}

export default function({ $axios, redirect }) {
  $axios.onRequest(req => {
    req.timeout = reqConfig.timeout
    console.log(req, '请求的req')
  })

  $axios.onResponse(res => {
    console.log(res, '返回的res')
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
