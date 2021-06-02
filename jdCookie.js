/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东  账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  'pt_pin=hubeizgd;pt_key=AAJgpjtoADBY_Wi4odDv21boRHaCap7MJQu0WegGnEp7gDPYjf83WBbgB9L01NrmaK6OI6aCg0k;',//账号一hubeizgd,例:pt_key=XXX;pt_pin=XXX;
  'TrackerID=JvcDDIa-8xN8UesxbO9AnrB-ImVIY2xh1l-p4RvvGNvK4nQf3reeWqjNcGHc9cHcMnZcltfYtbMQkWhA_0c7xsr4S4Dy5spwYgk5Re_OoSk; pt_key=AAJglJKfADD4U0wcZrlgoH6C2E9_6nqWz-uV9-B2N45w_NKkIwnrVzFTe8iJsBvlB_EZDcZSSWU; pt_pin=jd_NGyFOHlKvKZL; pt_token=jeg8oink; pwdt_id=jd_NGyFOHlKvKZL; s_key=AAJglJKfADAYmGaKMLjZIdSb-6V2hv6udtLGyph6whkw1l1qDCm1v0vbu4gpfI77P8b_2r8Y4sk; s_pin=jd_NGyFOHlKvKZL; wq_skey=;',//账号2老张20161026,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=vhHOWyE83VZ3SzuphUi-hSEYAyvQ7q2MVVm7j1kXCSRAu33y0H4Mq3MBpArhiN5_7XNjX_esixjORiS1pB8qh11oFm7uH9FpbgnR2GKp8Mo; pt_key=AAJglJTGADDyy8dgx0dUHntf7MZXtEA6c-cTHoZ10lOaVpneVoPV7i8VRr9Hu2C2TwR1gX6-lnE; pt_pin=jd_4111af4470dfa; pt_token=dl4lj666; pwdt_id=jd_4111af4470dfa; s_key=AAJglJTGADCOpeIJvqJibeR4rB3R8FvWMYhA35Q3oT-WXTi2MCWgTAdGuP_xrw54SZnGKK4GBq4; s_pin=jd_4111af4470dfa; wq_skey=;',//账号3：jd_linana987,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=wl43DbnTy3Mm2IsxVvSh1gUshWqhNvTpyeJuj4JLkqGbPvO8el_ashM_ShyNvmgJksKMWJ5SgLzBs7V7xAz82Y-LTgHKDBFnHE6FIDIt9dE; pt_key=AAJglGbLADD0G5n1-QIvuKF-fHdL90u69GvU9CVlGfiqnjwxhs9TzUlJMV6etSsjatZa9M-A5Ts; pt_pin=jd_7e9d16d3fc44f; pt_token=ga1sf6ak; pwdt_id=jd_7e9d16d3fc44f; s_key=AAJglGbKADDC6Qfb87Cuv3qXHDGku6IopUAhzo1ImKgHILTClmR0kp2iu7dzPkqC4waTzMKzteM; s_pin=jd_7e9d16d3fc44f; wq_skey=;',//账号4：wuruixia1983206,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=KNFdN1ebHQefoyMpzxM8shOjAKOtODH9HlIFiDVSZ-fWdjk7NLmzpQQ1g9QIgXyUEJYfT2A3IbRpx4aY4sNLp-JARER-qxVv4TfUZDySPO4; pt_key=AAJglJ7vADDzGvbEA9uOsFx2KwBKMXW_xEuJtpU571B0uR8HWD7pW-aEsp1EtuDTuQ6VXXsHI5k; pt_pin=szxsd466899131; pt_token=gugp76hf; pwdt_id=szxsd466899131; s_key=AAJglJ7vADDO_dCMBw8p8aFM-zq1Xjd7pX2xTyZIDV7w4eoB_PlQDkdvx5WS0MXhDYovshWaWy8; s_pin=szxsd466899131; wq_skey=;',//账号5：szxsd466899131,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=0-nzZWTzalMZqGpti3taF7P1vbEdeKHbM0P45Ebe5jwzJXtrtiktGiN70EyvXil-ecuaWQaD5zHPK3nsbffmraNw7cqfsPIAjmWopAYlkow; pt_key=AAJgmNkQADBlY2wX5HlaB3GeJygP1r8mSmldFO0tpUM00EAH7ZZmYWB_LxH7tysW_LtdXC_GL3Y; pt_pin=%E8%81%9A%E7%BC%98668; pt_token=kc76e0bg; pwdt_id=%E8%81%9A%E7%BC%98668; s_key=AAJgmNkQADAfnk8eBVVqJvzhswnUdf8wHTfFhVY0E9eD4A7KGMyk3FSK9Gtqc4VePpkPU7eXPCQ; s_pin=%E8%81%9A%E7%BC%98668; wq_skey=;',//账号6：聚缘668,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_pin=huanglijia39;pt_key=AAJgmj1JADAinWon7e7TaXY5LmZFXCi3a-gDPc6v2hSROmafy_-5RujFYvHPP_VNRTT35FeXcrk;',//账号7：huanglijia39,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=nB16ibXUddEuVhzZAPbAFRWxqjT500xQ5C0WExaPwdi4RV18PwZj1sK1JzsxZHz3OBT46ZeEIYaj9iDi01qJzpxpjwhEQgBa9aV6Tv9xris; pt_key=AAJgoQOOADByMv2VuAIRW57S1vNO0ns6GhIaEcsMHJfXGqI6HpP07iv06liwwy2yyYozmjHc_5E; pt_pin=jd_5d32ea2442972; pt_token=hlnqegp9; pwdt_id=jd_5d32ea2442972; s_key=AAJgoQOOADCEiBVjOHXO4892E4OYdukuKT-asCvrtdh98L5OmZWP_AfzZXYJBUf0bwyzMDK5tsI; s_pin=jd_5d32ea2442972; wq_skey=;',//账号8：林大大jd_5d32ea2442972,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_pin=jd_690179045e3ed;pt_key=AAJgpbf7ADAo9S0bYjk0sE2SwXqbuYbHJl28uUhR502Pn0dPcoab1pl-ZHP8b0iABjI8JsD0Rf4;',//账号9：guozhen19811003,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=4RtWXG7Kp789UQA7yAusSTeNZbmPP8ZLqhx_gc-NNr5zSF8IEVdc7o1T7aeP2Te4bEb51SsjBcHtqHCMFOJvy2V9ewdigWpRW7MXjDmOAT0; pt_key=AAJgpP00ADCE2g6NTbhGUqONzzXIZwxMXreqA0a2E7g9XZmmXH4nNw33k_BiMq8iTbpFPD3Pz0k; pt_pin=jd_BlUaRXrXCgOk; pt_token=chfbgrnb; pwdt_id=jd_BlUaRXrXCgOk; s_key=AAJgpP00ADAPHP21dCxiHBjJaq1pK5WRbiOsN8wQfOGgaOpMcHgzFa08xne2elyR9V8oa9iR68Y; s_pin=jd_BlUaRXrXCgOk; wq_skey=;',//账号10：小巫02,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_pin=jd_BJEasityssFb;pt_key=AAJgrz0vADCd89NTzcWaHnRc5RUVpPhiyS2tzd63mnJOX0U9wr2O58Ff2pvgQmuEc3W2i4rh3B4;',//账号12：联通上丁2,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_pin=jd_yScjXlhkbgaD;pt_key=AAJgq27bADBuGX5gl4a7NaQQf3DgkD78Dc7OjLciDo99x7n-56bda38K5PbKNKpzSOjLUEVptoM;',//账号13： HLJ02,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_pin=jd_506461fc0445f;pt_key=AAJgrgEdADDAsFe_u8h1aQKuMDtRXadU6q4qDENZnvGzBgHFb5jz9dU-Qn6oIloffFTHIyegwMc;',//账号14 ：HLJ表妹,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'pt_pin=jd_DJvSxYfBouCo;pt_key=AAJgr1-hADD-bttjqTXyLz71eq1VxGMAtxDrHYZoHaqL7kSOuNahHHGOAQhZwSZ1u20_yxZ9hbQ;',//账号15：娜娜02,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=r-njUjWr3I2OB5iUyuQM7pR7KsQsCkMFKVK_IPUlxHp2hwlJGKNaTs7j_xVm06qA8W4dkGlGzvipsmfzu7baUsVDBHgcbC10Ylk6TTA1518; pt_key=AAJgtvzjADDn2baqKVsYtPUurb3Ksz1bQm6uYaJUi0lav0M3fp2wI3T1MSHXhXpct6dddeagJjo; pt_pin=jd_7da325b5ed8be; pt_token=zvj4ggtt; pwdt_id=jd_7da325b5ed8be; s_key=AAJgtvzjADDI94y6PTXS0QUMf8qbp3WtbMAGoZuFNMkosdLuy9jHuwJZqCjpSNpFfB_2cDCR6ow; s_pin=jd_7da325b5ed8be; wq_skey=;',//账号15 17875597420容L-R,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  'TrackerID=IAYBiUtbmLFzfz67HIhmdMthfDBAURh0Zkw0KnI4WPOYcvOsphC1lWfJ_P0N-3Vk5bWx6LsibNRLKeSaAjej1s6FVYcGnW_4LO5wahX9GAU; pt_key=AAJgtv1iADDJQKTQHrBqzCjViHZQSoqe-7zOPDZr321kk6KgBfGXNicB34Zd4CXxTgASZZi2b0o; pt_pin=jd_42bfb8faad249; pt_token=fzeqtcva; pwdt_id=jd_42bfb8faad249; s_key=AAJgtv1iADC22DyECQ4Ri31N9BBmqVcTj8atwts0H-DvDnWQvua0KhhYkB-uaFrs6JRWrHnGtpA; s_pin=jd_42bfb8faad249; wq_skey=;',//账号16 17875597420JNanl,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  '',//账号17 ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = process.env.JD_COOKIE.split();
  }
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
