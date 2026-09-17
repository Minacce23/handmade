// Your projects. Edit them at /handmade/admin/ or by hand here.
// categories: any of "sewing", "crochet", "knitting". The first photo is the cover.
// photoTags (optional): labels for single photos, e.g. {"a.jpg": ["knitting"]}.
// Photos without a label count for all of the project's categories.
// date: "YYYY-MM", or "" to hide it. hidden: true keeps a project off the site.
// Projects appear on the site in this order.
const PROJECTS = [
  {"title":"Periwinkle Poppy Tee","categories":["knitting"],"date":"2024-08","photos":["knitting-mu5158v21608-emu515emc.jpg"]},
  {"title":"Chicken Sock","categories":["knitting"],"date":"2024-04","photos":["knitting-mu50tg0tulv4.jpg"]},
  {"title":"Powerpuff Sweater","categories":["crochet"],"date":"2022-01","photos":["crochet-mu50rwfrmr06.jpg"]},
  {"title":"Froggy Hat","categories":["sewing"],"date":"2021-12","photos":["sewing-mu50gaexgdba.jpg","sewing-mu50gagdm2xs.jpg"]},
  {"title":"Euphoria Sweater Vest + Collared Shirt","categories":["sewing","crochet"],"date":"2020-10","photos":["sewing-mu50e7ml99q0.jpg","sewing-mu50e7kybt72-emu50eez5.jpg"],"photoTags":{"sewing-mu50e7kybt72-emu50eez5.jpg":["crochet"]}},
  {"title":"Leaf Cardigan","categories":["knitting"],"date":"2023-01","photos":["knitting-mu50d0a476zh.jpg","knitting-mu50sp8zkgyc.jpg"]},
  {"title":"Starburst Sweater","categories":["knitting"],"date":"2024-05","photos":["sewing-mu4zngs9x4bs-emu4znuav.jpg","sewing-mu4zngoo89i6-emu4zo2fd.jpg"]},
  {"title":"Sungod Tank","categories":["crochet"],"date":"2022-04","photos":["sewing-mu4zlpzpir4v-emu4zm35b.jpg","sewing-mu4zlq05wui3.jpg"]},
  {"title":"Wendigo Corset + Witch Hat","categories":["sewing","crochet"],"date":"2024-09","photos":["sewing-mu4zgxxeh7md-emu4zhkps.jpg","sewing-mu4zhdh0fjrz.jpg","sewing-mu4zhdizoplg.jpg","sewing-mu51faxhrhia.jpg"],"photoTags":{"sewing-mu4zgxxeh7md-emu4zhkps.jpg":["sewing"]}},
  {"title":"Pullover Sweater Vest","categories":["knitting"],"date":"2024-09","photos":["knitting-mu4yq8au8ao9-emu4yqet7.jpg","knitting-mu4yq8cf5mp0-emu4yqlq7.jpg","knitting-mu4yq8flnntr-emu4yqpor.jpg","knitting-mu5141dp3au0.jpg","knitting-mu51aeycz3gd-emu51alo0.jpg"]},
  {"title":"Rainbow Poppy Tee","categories":["knitting"],"date":"2024-09","photos":["sewing-mu4ynuf1omsg-emu4yoaf4.jpg"]},
  {"title":"Hello Kitty Cross Body Bag","categories":["sewing"],"date":"2025-09","photos":["sewing-mu4ylcf13d35-emu4yliac.jpg","sewing-mu4ylcid0wtt.jpg","sewing-mu510l9s2plz.jpg"]},
  {"title":"Hello Kitty Mini Backpack","categories":["sewing"],"date":"2025-03","photos":["sewing-mu4yfw557c5c.jpg","sewing-mu4yfw9r5lom.jpg","sewing-mu4yfwdbpvks.jpg"]},
  {"title":"Green Sweater Vest","categories":["knitting"],"date":"2024-05","photos":["sewing-mu4y9f0xo60u.jpg"]},
  {"title":"Octopus Sweater","categories":["knitting"],"date":"2024-12","photos":["sewing-mu4y6bjzk3g2-emu4y75vt.jpg","sewing-mu4y6bnsrtwl-emu4y79pg.jpg"]},
  {"title":"Star Quilt","categories":["sewing"],"date":"2026-09","photos":["sewing-mu4xomsj1zt4.jpg","sewing-mu4xomud04wu.jpg","sewing-mu4xomw6wgz1.jpg","sewing-mu4xomy09901.jpg","sewing-mu4xomzn32gz.jpg","sewing-mu4xon1dxmr1.jpg","sewing-mu4xon34iav8.jpg","sewing-mu4xon4syb1x.jpg","sewing-mu4xon6mqqht.jpg","sewing-mu4xon8l6yed.jpg","sewing-mu4xonaclsm0.jpg","sewing-mu4xonc14e9r.jpg","sewing-mu4xondn369k.jpg","sewing-mu4xonffvm6c.jpg","sewing-mu4xonhaqbqd.jpg","sewing-mu4xonj1t65v.jpg","sewing-mu4xonkrrx8q.jpg","sewing-mu4xonmhyj4l.jpg","sewing-mu4xono8704z.jpg","sewing-mu4xonpyc5v3.jpg","sewing-mu4xonrq8962.jpg","sewing-mu4xontfg1si.jpg","sewing-mu4xonv4c1xo.jpg","sewing-mu4xonwucz8l.jpg","sewing-mu4xonynp9tg.jpg","sewing-mu4xoo0b16q0.jpg","sewing-mu4xoo22bkdt.jpg","sewing-mu4xoo3tsky7.jpg","sewing-mu4xoo5is0m3.jpg","sewing-mu4xoo78zsvm.jpg","sewing-mu4xoo92m0a7.jpg","sewing-mu4xooaveeud.jpg"]},
  {"title":"Boxer Shorts + Bowler Bag","categories":["sewing"],"date":"2026-08","photos":["sewing-mu4xqrp4xup8.jpg","sewing-02.jpg","sewing-mu4xqrso3x54.jpg"]},
  {"title":"Blue Ribbed Vest","categories":["knitting"],"date":"2025-05","photos":["knitting-01.jpg"]},
  {"title":"Joan of Arc Sweater","categories":["crochet"],"date":"2025-01","photos":["crochet-02.jpg"]},
  {"title":"Hot & Cold Quilt","categories":["sewing"],"date":"2023-09","photos":["sewing-07.jpg","sewing-03.jpg"]},
  {"title":"Scrappy Patchwork Quilt","categories":["sewing"],"date":"2023-08","photos":["sewing-08.jpg","sewing-09.jpg"]},
  {"title":"Waffle Knit Sweater","categories":["knitting"],"date":"2023-01","photos":["knitting-06.jpg"]},
  {"title":"Anime Blanket","categories":["crochet","knitting"],"date":"2022-10","photos":["crochet-mu4xssl8keyy.jpg","crochet-10.jpg","crochet-11.jpg","crochet-12.jpg","knitting-04.jpg","knitting-05.jpg","knitting-02.jpg","knitting-03.jpg","crochet-mu4xssjn0pd0.jpg","crochet-mu4xssmbbaso.jpg","crochet-mu4xssnauo56.jpg","crochet-mu4xssowdna5.jpg","crochet-mu4xvimni9qy.jpg","crochet-mu4xvioyff0c.jpg","crochet-mu4xviqbs4f5.jpg","crochet-mu4xviss73x4.jpg","crochet-mu4xviulo79t.jpg","crochet-mu4xvivsdddw.jpg","crochet-mu4xvix47ykw.jpg","crochet-mu4xviy2yase.jpg","crochet-mu4xvizc55l5.jpg","crochet-mu4xvj1aotg0.jpg","crochet-mu4xvj3cfxvr.jpg","crochet-mu4xvj4gheoc.jpg"],"photoTags":{"crochet-10.jpg":["crochet"],"crochet-11.jpg":["crochet"],"crochet-12.jpg":["crochet"],"knitting-04.jpg":["knitting"],"knitting-05.jpg":["knitting"],"knitting-03.jpg":["knitting"],"crochet-mu4xssjn0pd0.jpg":["knitting"],"crochet-mu4xssmbbaso.jpg":["knitting"],"crochet-mu4xssnauo56.jpg":["knitting"],"crochet-mu4xssowdna5.jpg":["knitting"],"crochet-mu4xvimni9qy.jpg":["crochet"],"crochet-mu4xvioyff0c.jpg":["crochet"],"crochet-mu4xviqbs4f5.jpg":["crochet"],"crochet-mu4xviss73x4.jpg":["crochet"],"crochet-mu4xviulo79t.jpg":["crochet"],"crochet-mu4xvivsdddw.jpg":["crochet"],"crochet-mu4xvix47ykw.jpg":["crochet"],"crochet-mu4xviy2yase.jpg":["crochet"],"crochet-mu4xvizc55l5.jpg":["crochet"],"crochet-mu4xvj1aotg0.jpg":["crochet"],"crochet-mu4xvj3cfxvr.jpg":["crochet"],"crochet-mu4xvj4gheoc.jpg":["crochet"]}},
  {"title":"Textured Stripe Panel","categories":["crochet"],"date":"2022-03","photos":["crochet-07.jpg"]},
  {"title":"Diagonal Stripe Blankets","categories":["crochet"],"date":"2022-02","photos":["crochet-04.jpg","crochet-03.jpg"]},
  {"title":"Cat Ear Beanie","categories":["crochet"],"date":"2022-02","photos":["crochet-05-emu4y7nfb.jpg"]},
  {"title":"Granny Square Cardigan","categories":["crochet"],"date":"2022-01","photos":["crochet-13.jpg","crochet-14.jpg","crochet-mu50lujpuony.jpg","crochet-mu50luhh3ckv-emu50m96l.jpg","crochet-mu50lul7vhgl-emu50mbm7.jpg"]},
  {"title":"Two-Tone Sweater","categories":["crochet"],"date":"2021-01","photos":["crochet-08.jpg","crochet-mu4zfx6n11xm.jpg"]},
  {"title":"Colorblock Cardigan","categories":["crochet"],"date":"2021-01","photos":["crochet-09-emu4y7tb0.jpg"]},
  {"title":"K Sweater","categories":["crochet"],"date":"2020-11","photos":["crochet-mu4ydpzp4dos.jpg","crochet-01.jpg"]},
  {"title":"Tropical Print Set","categories":["sewing"],"date":"2020-09","photos":["sewing-05.jpg","sewing-04.jpg","sewing-06.jpg"]},
  {"title":"Blue Maxi Dress","categories":["sewing"],"date":"2026-03","photos":["sewing-01.jpg","sewing-mu4yzlw2i1lt-emu4yzt0t.jpg"]},
  {"title":"Patchwork Cardigan","categories":["crochet"],"date":"2020-08","photos":["crochet-06.jpg"]},
];
