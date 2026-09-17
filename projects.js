// Your projects. Edit them at /handmade/admin/ or by hand here.
// categories: any of "sewing", "crochet", "knitting". The first photo is the cover.
// photoTags (optional): labels for single photos, e.g. {"a.jpg": ["knitting"]}.
// Photos without a label count for all of the project's categories.
// date: "YYYY-MM", or "" to hide it. hidden: true keeps a project off the site.
// Projects appear on the site in this order.
const PROJECTS = [
  {"title":"Octopus Sweater","categories":["knitting"],"date":"2024-12","photos":["sewing-mu4y6bjzk3g2-emu4y75vt.jpg","sewing-mu4y6bnsrtwl-emu4y79pg.jpg"]},
  {"title":"Star Quilt","categories":["sewing"],"date":"2026-09","photos":["sewing-mu4xomsj1zt4.jpg","sewing-mu4xomud04wu.jpg","sewing-mu4xomw6wgz1.jpg","sewing-mu4xomy09901.jpg","sewing-mu4xomzn32gz.jpg","sewing-mu4xon1dxmr1.jpg","sewing-mu4xon34iav8.jpg","sewing-mu4xon4syb1x.jpg","sewing-mu4xon6mqqht.jpg","sewing-mu4xon8l6yed.jpg","sewing-mu4xonaclsm0.jpg","sewing-mu4xonc14e9r.jpg","sewing-mu4xondn369k.jpg","sewing-mu4xonffvm6c.jpg","sewing-mu4xonhaqbqd.jpg","sewing-mu4xonj1t65v.jpg","sewing-mu4xonkrrx8q.jpg","sewing-mu4xonmhyj4l.jpg","sewing-mu4xono8704z.jpg","sewing-mu4xonpyc5v3.jpg","sewing-mu4xonrq8962.jpg","sewing-mu4xontfg1si.jpg","sewing-mu4xonv4c1xo.jpg","sewing-mu4xonwucz8l.jpg","sewing-mu4xonynp9tg.jpg","sewing-mu4xoo0b16q0.jpg","sewing-mu4xoo22bkdt.jpg","sewing-mu4xoo3tsky7.jpg","sewing-mu4xoo5is0m3.jpg","sewing-mu4xoo78zsvm.jpg","sewing-mu4xoo92m0a7.jpg","sewing-mu4xooaveeud.jpg"]},
  {"title":"Boxer Shorts","categories":["sewing"],"date":"2026-08","photos":["sewing-02.jpg","sewing-mu4xqrp4xup8.jpg","sewing-mu4xqrso3x54.jpg"]},
  {"title":"Blue Ribbed Vest","categories":["knitting"],"date":"2025-05","photos":["knitting-01.jpg"]},
  {"title":"Joan of Arc Sweater","categories":["crochet"],"date":"2025-01","photos":["crochet-02.jpg"]},
  {"title":"Warm Vs Cool Quilt","categories":["sewing"],"date":"2023-09","photos":["sewing-07.jpg","sewing-03.jpg"]},
  {"title":"Scrappy Patchwork Quilt","categories":["sewing"],"date":"2023-08","photos":["sewing-08.jpg","sewing-09.jpg"]},
  {"title":"Waffle Knit Sweater","categories":["knitting"],"date":"2023-01","photos":["knitting-06.jpg"]},
  {"title":"Anime Blanket","categories":["crochet","knitting"],"date":"2022-10","photos":["crochet-mu4xssl8keyy.jpg","crochet-10.jpg","crochet-11.jpg","crochet-12.jpg","knitting-04.jpg","knitting-05.jpg","knitting-02.jpg","knitting-03.jpg","crochet-mu4xssjn0pd0.jpg","crochet-mu4xssmbbaso.jpg","crochet-mu4xssnauo56.jpg","crochet-mu4xssowdna5.jpg","crochet-mu4xvimni9qy.jpg","crochet-mu4xvioyff0c.jpg","crochet-mu4xviqbs4f5.jpg","crochet-mu4xviss73x4.jpg","crochet-mu4xviulo79t.jpg","crochet-mu4xvivsdddw.jpg","crochet-mu4xvix47ykw.jpg","crochet-mu4xviy2yase.jpg","crochet-mu4xvizc55l5.jpg","crochet-mu4xvj1aotg0.jpg","crochet-mu4xvj3cfxvr.jpg","crochet-mu4xvj4gheoc.jpg"],"photoTags":{"crochet-10.jpg":["crochet"],"crochet-11.jpg":["crochet"],"crochet-12.jpg":["crochet"],"knitting-04.jpg":["knitting"],"knitting-05.jpg":["knitting"],"knitting-03.jpg":["knitting"],"crochet-mu4xssjn0pd0.jpg":["knitting"],"crochet-mu4xssmbbaso.jpg":["knitting"],"crochet-mu4xssnauo56.jpg":["knitting"],"crochet-mu4xssowdna5.jpg":["knitting"],"crochet-mu4xvimni9qy.jpg":["crochet"],"crochet-mu4xvioyff0c.jpg":["crochet"],"crochet-mu4xviqbs4f5.jpg":["crochet"],"crochet-mu4xviss73x4.jpg":["crochet"],"crochet-mu4xviulo79t.jpg":["crochet"],"crochet-mu4xvivsdddw.jpg":["crochet"],"crochet-mu4xvix47ykw.jpg":["crochet"],"crochet-mu4xviy2yase.jpg":["crochet"],"crochet-mu4xvizc55l5.jpg":["crochet"],"crochet-mu4xvj1aotg0.jpg":["crochet"],"crochet-mu4xvj3cfxvr.jpg":["crochet"],"crochet-mu4xvj4gheoc.jpg":["crochet"]}},
  {"title":"Textured Stripe Panel","categories":["crochet"],"date":"2022-03","photos":["crochet-07.jpg"]},
  {"title":"Diagonal Stripe Blankets","categories":["crochet"],"date":"2022-02","photos":["crochet-04.jpg","crochet-03.jpg"]},
  {"title":"Cat Ear Beanie","categories":["crochet"],"date":"2022-02","photos":["crochet-05-emu4y7nfb.jpg"]},
  {"title":"Granny Square Cardigan","categories":["crochet"],"date":"2022-01","photos":["crochet-13.jpg","crochet-14.jpg"]},
  {"title":"Two-Tone Sweater","categories":["crochet"],"date":"2021-01","photos":["crochet-08.jpg"]},
  {"title":"Colorblock Cardigan","categories":["crochet"],"date":"2021-01","photos":["crochet-09-emu4y7tb0.jpg"]},
  {"title":"Letter K Sweater","categories":["crochet"],"date":"2020-11","photos":["crochet-01.jpg"]},
  {"title":"Tropical Print Set","categories":["sewing"],"date":"2020-09","photos":["sewing-05.jpg","sewing-04.jpg","sewing-06.jpg"]},
  {"title":"Blue Maxi Dress","categories":["sewing"],"date":"","photos":["sewing-01.jpg"]},
  {"title":"Patchwork Cardigan","categories":["crochet"],"date":"","photos":["crochet-06.jpg"]},
];
