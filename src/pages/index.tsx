import './index.less';
import Title from '../../es/Title';
import Carousel from '../../es/Part/Carousel';
import Img01 from '../../es/List/Img01';
import Img02 from '../../es/List/Img02';
import List12 from '../../es/List/List12';
import List09 from '../../es/List/List09';


export default function IndexPage() {

  const data_c = {
    title: "サイトカイン点滴",
    list: [{
      img: "https://inews.gtimg.com/newsapp_bt/0/202207165715758183044/0",
      txt: "info 1"
    }, {
      img: "https://inews.gtimg.com/newsapp_bt/0/202207165716902390268/0",
      txt: "info 2"
    }, {
      img: "https://puui.qpic.cn/vpic_cover/e0043d7kedd/e0043d7kedd_hz.jpg/496",
      txt: "info 3"
    }, {
      img: "https://puui.qpic.cn/vpic_cover/d0043dx3mtr/d0043dx3mtr_hz.jpg/496",
      txt: "info 4"
    }],
    line: 1,
    text: 0,
  }
  const data_l09 = {
    list: [
      {
        title: '',
        label: 'NBA',
        cnt: '雷霆98-77爵士 新科榜眼霍姆格伦狂轰23分7篮板6盖帽闪耀全场',
      },
      {
        title: '',
        label: 'NBA',
        cnt: '湖人100-77勇士 小皮蓬15+8穆迪仅9分',
      },
      {
        title: '',
        label: 'NBA',
        cnt: '爷青回？勇士对杜兰特感兴趣 国际赛场NBA球员都杀疯了',
      },
    ],
    line: 1,
    label: 1,
    tit: 1,
  };
  const data_i1 = {
    title: '最新情报',
    list: [
      {
        img: 'http://inews.gtimg.com/newsapp_bt/0/15071857454/641',
        title: '杜兰特',
        label: '2022-07-06 00:13',
        cnt: '篮网正在寻求NBA历史上最大的交易回报之一。名记斯坦恩也表示，除非得到一个包括英格拉姆或者斯科蒂-巴恩斯等年轻球星的大报价，篮网更倾向于留下杜兰特。他们肯定要拿到比之前马刺、爵士更多的回报。',
        list: [],
      },
      {
        img: 'https://p7.itc.cn/q_70/images03/20220706/e83bac7d116341b1b39326be1f843019.jpeg',
        title: '篮网',
        label: '2022-07-06 00:13',
        cnt: '连添两将！美媒晒篮网目前阵容：篮网完全可以留下杜欧，首发：欧文、乔-哈里斯、杜兰特、本-西蒙斯、克拉克斯顿；替补：米尔斯、赛斯-库里、罗伊斯-奥尼尔、卡梅隆-托马斯、TJ-沃伦，再加上刚签下的萨姆纳。 ',
        list: [],
      },
      {
        img: 'http://inews.gtimg.com/newsapp_bt/0/15067014764/641',
        title: '杜欧交易',
        label: '2022-07-06 00:13',
        cnt: '北京时间7月5日，NBA名记Brandon Robinson在节目上揭秘了杜兰特、欧文交易的6大内幕，最重要的一点在于猛龙已经松口，愿意送出最佳新秀斯科蒂-巴恩斯。',
        list: [],
      },
      {
        img: 'https://k-static.xsfaya.com/uploads/allimg/220707/13534V116-6.jpg',
        title: '莫兰特',
        label: '2022-07-06 00:13',
        cnt: '灰熊队官方宣布，球队正式与莫兰特达成续约，双方签订的是一份5年1.93亿美元的顶薪合同，与锡安一样，若是触发了制定新秀条款或者罗斯条款，合同最高可达到2.31亿美元。莫兰特能得到顶薪合同是毫无疑问的，经过几个赛季的历练，莫兰特成为灰熊队的当家球星，未来不可限量。',
        list: [],
      },
      {
        img: 'https://inews.gtimg.com/newsapp_bt/0/15072514326/1000',
        title: '杜兰特',
        label: '2022-07-06 00:13',
        cnt: '自由市场开启后杜兰特提出交易申请，一心想要离开篮网。作为蔡崇信而言过去的几个赛季他付出了太多的人力财力，现在杜兰特想要离队，那么篮网必然会争取利益最大化。，但是戈贝尔的交易成功必然会进一步刺激篮网管理层。据悉他们希望用杜兰特换取到全明星球员以及选秀权，只是截止到目前虽然有多支球队对得到杜兰特抱有浓厚兴趣但是并没有实质性的进展。寻求交易陷入停滞这让杜兰特很是尴尬。',
        list: [],
      },
      {
        img: 'https://inews.gtimg.com/newsapp_bt/0/15016136499/1000',
        title: '勇士',
        label: '2022-07-07',
        cnt: '2022年总冠军归属终于尘埃落定，勇士这三年的故事早已不必多言。他们曾在巅峰，也经历过低谷，哪怕是他们始终坚持自己的道路，在今年艰难地找回了曾经的自己，他们也从未被看好。直到总决赛第四场，在被外界质疑的情况下，那个只会投篮的伪巨星率先证明了自己。随后，那个怠惰懒散的掺水状元，那个瘦弱鲁莽的最差新秀，那个沉迷博客无限退化的矮子恶霸，那个凭借工龄霸占球权的浪投射手，都亲自把这些贴在他们身上充满偏见的标签撕去了。这样的故事无论是在哪个领域，都是岁月史书上最浓墨重彩的一篇。',
        list: [],
      },
      {
        img: 'https://sports3.gtimg.com/community/92154413f14e4a8088e9216d1a95ae22.jpeg/0',
        title: '约基奇',
        label: '2022-07-07',
        cnt: '今年的自由市场开启后，掘金队和球队核心约基奇完成5年2.7亿美元的提前续约，这份合同也让约基奇成为了NBA目前总合同金额最大的球员，也再一次刷新了NBA的合同纪录。',
        list: [],
      },
    ],
    line: true,
    id: true,
  };
  const data_l12 = [
    {
      des: "お知らせ",
      title: "四大中锋，在线求职",
      cnt_g1: "06-6121-6103",
      cnt_g2: "第一，格里芬，和库里一年状元，曾经快船的王牌内线，霍华德，魔术的状元，曾经最佳防守中锋，篮板王，都没人要了。第二，考辛斯，曾经西部第一中锋，国王当家中锋，阿尔德里奇，曾经开拓者中投小王子，季后赛把火箭，投得没脾气啊。第三，现在这曾经，联盟四大中锋，格里芬，霍华德，考辛斯，阿尔德里奇，还没有球队签约，需要替补中锋的，看过来了。",
      cnt_g3: "受付時間 / 平日9:00 ~ 18:00",
      line: 1,
      hr: true,
    },
    {
      des: "お知らせ",
      title: "四大中锋，在线求职",
      cnt_g1: "06-6121-6103",
      cnt_g2: "第一，格里芬，和库里一年状元，曾经快船的王牌内线，霍华德，魔术的状元，曾经最佳防守中锋，篮板王，都没人要了。第二，考辛斯，曾经西部第一中锋，国王当家中锋，阿尔德里奇，曾经开拓者中投小王子，季后赛把火箭，投得没脾气啊。第三，现在这曾经，联盟四大中锋，格里芬，霍华德，考辛斯，阿尔德里奇，还没有球队签约，需要替补中锋的，看过来了。",
      cnt_g3: "受付時間 / 平日9:00 ~ 18:00",
      line: 1,
      hr: true,
    }
    ,
    {
      des: "お知らせ",
      title: "四大中锋，在线求职",
      cnt_g1: "06-6121-6103",
      cnt_g2: "第一，格里芬，和库里一年状元，曾经快船的王牌内线，霍华德，魔术的状元，曾经最佳防守中锋，篮板王，都没人要了。第二，考辛斯，曾经西部第一中锋，国王当家中锋，阿尔德里奇，曾经开拓者中投小王子，季后赛把火箭，投得没脾气啊。第三，现在这曾经，联盟四大中锋，格里芬，霍华德，考辛斯，阿尔德里奇，还没有球队签约，需要替补中锋的，看过来了。",
      cnt_g3: "受付時間 / 平日9:00 ~ 18:00",
      line: 1,
      hr: true,
    }
  ]

  const data_i02 = {
    title: "相关链接",
    list: [{
      img: "https://sports3.gtimg.com/community/d3f529c176f54ac78692e88ef77e0a76.jpeg/0",
      title: "热议NBA",
      cnt: "上赛季萎靡的前联盟大小王，今年谁能重振雄风？",
      btn: "跳转",
      link: "information",
    }, {
      img: "http://inews.gtimg.com/newsapp_bt/0/15073791474/641",
      title: "热议NBA",
      cnt: "湖人队记曝欧文进展：合同到期后来湖人 其他球队交易只能“租借”一年",
      btn: "跳转",
      link: "information",
    }, {
      img: "https://inews.gtimg.com/newsapp_bt/0/15072963224/641",
      title: "热议NBA",
      cnt: "突发！联盟紧急叫停！4年1.04亿就这样没了？尼克斯懵圈了",
      btn: "跳转",
      link: "#",
    }],
    line: 0,
    btn: 1
  }
  return (
    <div id='root'>
      <div id="head">
        <Carousel data={data_c}></Carousel>
        <div className="m-bd">
          <div className="m-lt">
            <Title title={"最新情报"} line={0}></Title>
          </div>
          <div className="m-rt">
            <List09 data={data_l09}></List09>
          </div>
        </div>

      </div>
      <div id="body">
        <div id="m-lt"><Img01 data={data_i1} /></div>
        <div id="m-rt">
          {
            data_l12.map((item, index) => {
              return (
                <div key={index}>
                  <List12 data={item} />
                </div>
              )
            })
          }
        </div>
      </div>
      <div id="footer">
        <Img02 data={data_i02}></Img02>

      </div>







    </div>
  );
}
