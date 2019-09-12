var hideBlock = document.getElementById("hide");
hideBlock.style.display = "none"

var hideTitle2 = document.getElementById("title2");
hideTitle2.style.display = "none"

var hideInforImage = document.getElementById("inforImage");
hideInforImage.style.display = "none"

var histoInformation = [{"item":1,"image":false,"xvalue":0,"yvalue":0,"year":"1955","title":"决定组建学校","text":"中央高教部以成都为中心建设西南无线电工业基地。与交通大学、华南工学院相关系科共同组建成都电讯工程学院（今电子科技大学）。"},
                        {"item":2,"image":false,"xvalue":1,"yvalue":0,"year":"1956","title":"建校","text":"1956年9月，交通大学（现上海交通大学、西安交通大学）的电讯工程系、华南工学院（现华南理工大学）的电讯系和南京工学院（现东南大学）的无线电系合并创建而成了新中国第一所无线电大学。"},
                        {"itme":3,"image":true,"imageSrc":"inforImage/test1.png","xvalue":1,"yvalue":1,"year":"1956","title":"首届开学典礼举行","text":"1956年9月29日下午，全校3000多名师生员工和来宾，在主楼东边体育场隆重举行了成都电讯工程学院首届开学典礼。"},
                        {"itme":4,"image":true,"imageSrc":"inforImage/test2.png","xvalue":1,"yvalue":2,"year":"1956","title":"傅世全成为第一个到成电报到的人 ","text":"在来学校报道的路上得知学校延迟一个月开学的消息时，他没有转道回家，而是毅然决然地来到了学校。与工人通吃同住，一起参与校园建设。在毕业之后，他也选择留在了学校工作至退休，是一位名副其实的老成电人。"},
                        {"itme":5,"xvalue":1,"yvalue":3,"year":"1956","title":"选定校址，开始建造主楼","text":"1956年2月，由于选定校址到开学一共只有半年的时间，时间紧迫，便直接采用了苏联莫斯科动力学院的主楼图纸。由于建筑材料不足，主楼还借用了部分成都市城墙的砖修建。"},
                        {"itme":6,"xvalue":2,"yvalue":0,"year":"1957","title":"学校举行首届毕业生典礼 ","text":"1957年9月，110名毕业生走上了建设祖国的岗位，这是成电建校以来向国家输送的第一批高级电讯技术人才。"},
                        {"itme":7,"xvalue":3,"yvalue":0,"year":"1958","title":"待补充信息","text":""},
                        {"itme":8,"xvalue":4,"yvalue":0,"year":"1959","title":"学校召开了首届党代会并提出新的人才培养目标 ","text":"会上，校党委书记蒋崇璟号召全校师生：克服前进中的一切困难，建设共产主义的无线电工业大学的理想一定能实现。学校提出人才培养目标是：贯彻党的教育方针，培养出有共产主义觉悟的全面发展的新人。"},
                        {"itme":9,"xvalue":5,"yvalue":0,"year":"1960","title":"确立重点高校","text":"定为全国重点高校，随后又被确定为七所国防重点院校之一。"},
                        {"itme":10,"xvalue":6,"yvalue":0,"year":"1961","title":"待补充信息","text":""},
                        {"itme":11,"xvalue":7,"yvalue":0,"year":"1962","title":"待补充信息","text":""},
                        {"itme":12,"xvalue":8,"yvalue":0,"year":"1963","title":"待补充信息","text":""},
                        {"itme":13,"xvalue":9,"yvalue":0,"year":"1964","title":"建立研究室","text":"成立电真空与固体器件研究室。"},
                        {"itme":14,"xvalue":9,"yvalue":1,"year":"1964","title":"参加高校运动会","text":"在成都市高校田径运动会上，在37个比赛项目中，共夺得21个冠军。"},
                        {"itme":15,"xvalue":10,"yvalue":0,"year":"1965","title":"建成校舍","text":"学校基建投入达3000多万元，建成教学用房10幢。"},
                        {"itme":16,"xvalue":11,"yvalue":0,"year":"1966","title":"图书馆藏书达41万册 ","text":"建校之初，学校图书馆拥有图书14万册，1966年，图书馆藏书达已达41万册。"},
                        {"itme":17,"xvalue":12,"yvalue":0,"year":"1967","title":"待补充信息","text":""},
                        {"itme":18,"xvalue":13,"yvalue":0,"year":"1968","title":"待补充信息","text":""},
                        {"itme":19,"xvalue":14,"yvalue":0,"year":"1969","title":"待补充信息","text":""},
                        {"itme":20,"xvalue":15,"yvalue":0,"year":"1970","title":"我校发展惠及民生","text":"由我校牵头，顾德仁教授负责总体设计的彩色电视大会战在100多位教师和科研人员的共同努力下圆满完成任务，获得了上级嘉奖。"},
                        {"itme":21,"xvalue":16,"yvalue":0,"year":"1971","title":"筹建国营永红机械厂暨国营4200厂","text":"截至目前我校附属工厂仍在学生学习及部分产品试制方面发挥着重要作用。"},
                        {"itme":22,"xvalue":16,"yvalue":1,"year":"1971","title":"学校招收首届“工农兵”学员","text":"首届“工农兵”学员259人包括工人和生产兵团学员196名，解放军学员63名。设有5个专业：短波超短波通信、电视、电子计算机、半导体器件、电真空器件，学制三年。"},
                        {"itme":23,"xvalue":17,"yvalue":0,"year":"1972","title":"待补充信息","text":""},
                        {"itme":24,"xvalue":18,"yvalue":0,"year":"1973","title":"待补充信息","text":""},
                        {"itme":25,"xvalue":19,"yvalue":0,"year":"1974","title":"成功研制地铁传输设备","text":"成功研制了北京地铁运行需要的无线接续信息传输设备，地铁各站点、列车与总站之间的实时联系成为可能，保证了地铁运行的高安全性。"},
                        {"itme":26,"xvalue":20,"yvalue":0,"year":"1975","title":"开展函授教育","text":"文革期间，学校以知训班的形式开展函授教育,先后在温江地区举办了4期无线电、农机类知训班。"},
                        {"itme":27,"xvalue":21,"yvalue":0,"year":"1976","title":"待补充信息","text":""},
                        {"itme":28,"xvalue":22,"yvalue":0,"year":"1977","title":"待补充信息","text":""},
                        {"itme":29,"xvalue":23,"yvalue":0,"year":"1978","title":"待补充信息","text":""},
                        {"itme":30,"xvalue":24,"yvalue":0,"year":"1979","title":"吴立人校长去世 ","text":"吴立人校长是电子科技大学首任书记和院长，也是“12.9”学生运动中的活跃分子，抗战前加入地下党。他奉命在短短—年内，将三校电讯系迁到成都，以此为基础，合并以后，重建新院，并要求必须在1956年秋季按时招收新生开学，这在全国筹建大学的历史上是空前的。在成电期间坚定地依靠知识分子办学，为学校的发展打下了良好的基础。"},
                        {"itme":31,"xvalue":25,"yvalue":0,"year":"1980","title":"张煦当选为中国科学院院士 ","text":"张煦院士，信息与通信系统专家。他是我国早年参加通信建设的著名教授之一。在我国通信建设的历史转折阶段起了带头和推动作用。"},
                        {"itme":32,"xvalue":26,"yvalue":0,"year":"1981","title":"博士点受批","text":"国务院批准我校为全国首批具有博士授位权单位，批准3个博士学科点和4名博士生导师，这四名导师是刘盛纲，林为干，谢处方，顾德仁。"},
                        {"itme":33,"xvalue":27,"yvalue":0,"year":"1982","title":"待补充信息","text":""},
                        {"itme":34,"xvalue":28,"yvalue":0,"year":"1983","title":"待补充信息","text":""},
                        {"itme":35,"xvalue":29,"yvalue":0,"year":"1984","title":"待补充信息","text":""},
                        {"itme":36,"xvalue":30,"yvalue":0,"year":"1985","title":"待补充信息","text":""},
                        {"itme":37,"xvalue":31,"yvalue":0,"year":"1986","title":"刘盛纲任我校校长","text":"1986年6月，刘盛纲任我校校长。刘盛纲，物理电子学家，中国科学院学部委员（院士），美国MIT电磁科学院院士。在电磁慢波结构、电子回旋脉塞（ECRM）、自由电子激光、相对论电子学和相对论等离子体电子学等领域做了大量的原创性工作，为电子科学技术的发展作出了大量的贡献。是国内公认的中国太赫兹科学研究的领导者。"},
                        {"itme":38,"xvalue":32,"yvalue":0,"year":"1987","title":"待补充信息","text":""},
                        {"itme":39,"xvalue":33,"yvalue":0,"year":"1988","title":"更名为“电子科技大学” ","text":"1988年5月，国家教委批准学校更名为“电子科技大学”,英文缩写为“UESTC”。学校逐步发展为以电子信息科学技术为核心，以工为主，理工渗透，理、工、管、文协调发展的多科性研究型大学。"},
                        {"itme":40,"xvalue":34,"yvalue":0,"year":"1989","title":"待补充信息","text":""},
                        {"itme":41,"xvalue":35,"yvalue":0,"year":"1990","title":"待补充信息","text":""},
                        {"itme":42,"xvalue":36,"yvalue":0,"year":"1991","title":"江泽民题词","text":"江泽民题词为我校题词：“努力培养电子科技人才，为我国社会主义现代化建设服务”。"},
                        {"itme":43,"xvalue":36,"yvalue":1,"year":"1991","title":"江泽民题词为我校题词：“努力培养电子科技人才，为我国社会主义现代化建设服务”。","text":"我校每年在本科毕业班级中评选出10个最优秀的班级授予“陈邦清班”称号，以纪念我校1987级校友、舍己救人的革命烈士陈邦清。"},
                        {"itme":44,"xvalue":37,"yvalue":0,"year":"1992","title":"待补充信息","text":""},
                        {"itme":45,"xvalue":38,"yvalue":0,"year":"1993","title":"待补充信息","text":""},
                        {"itme":46,"xvalue":39,"yvalue":0,"year":"1994","title":"待补充信息","text":""},
                        {"itme":47,"xvalue":40,"yvalue":0,"year":"1995","title":"待补充信息","text":""},
                        {"itme":48,"xvalue":41,"yvalue":0,"year":"1996","title":"待补充信息","text":""},
                        {"itme":49,"xvalue":42,"yvalue":0,"year":"1997","title":"学校科技经费首次突破一亿元","text":"现今我校的科研经费已经连续五年突破10亿元，在全国高等院校中排第29位。"},
                        {"itme":50,"xvalue":42,"yvalue":1,"year":"1997","title":"进入国家“211工程”首批重点建设大学的行列","text":"1997年10月，我校成为国家首批“211”工程重点建设大学之一 ，进入211工程以后，迎来了学校发展史上的一个新起点。作为211建设项目之一，学校建成了“中国教育与科研计算机网西南区域网络中心”，该中心成为中国教育与科研网十大节点之一。"},
                        {"itme":51,"xvalue":43,"yvalue":0,"year":"1998","title":"待补充信息","text":""},
                        {"itme":52,"xvalue":44,"yvalue":0,"year":"1999","title":"待补充信息","text":""},
                        {"itme":53,"xvalue":45,"yvalue":0,"year":"2000","title":"我校划归教育部主管","text":"2000年4月，学校由信息产业部划归教育部主管，成为教育部直属的全国重点大学。"},
                        {"itme":54,"xvalue":46,"yvalue":0,"year":"2001","title":"成为“985工程”重点建设大学","text":"2001年9月29日，成都锦江大礼堂举行部省共建电子科技大学签字仪式，原教育部副部长吕福源与四川省省长张中伟分别代表教育部与四川省人民政府共同签署省部共建电子科技大学协议，标志着我校跨入国家“985工程”重点建设的大学行列，为建设高水平研究型大学奠定了坚实的基础。"},
                        {"itme":55,"xvalue":47,"yvalue":0,"year":"2002","title":"待补充信息","text":""},
                        {"itme":56,"xvalue":48,"yvalue":0,"year":"2003","title":"待补充信息","text":""},
                        {"itme":57,"xvalue":49,"yvalue":0,"year":"2004","title":"待补充信息","text":""},
                        {"itme":58,"xvalue":50,"yvalue":0,"year":"2005","title":"待补充信息","text":""},
                        {"itme":59,"xvalue":51,"yvalue":0,"year":"2006","title":"待补充信息","text":""},
                        {"itme":60,"xvalue":52,"yvalue":0,"year":"2007","title":"清水河校区投入使用","text":"2007年9月，电子科技大学清水河校区正式投入使用，学校的主楼，体育馆，游泳馆工程曾获得 “中国建筑工程鲁班奖”。	校内遍植各种珍贵植物，1500余株银杏树巍然挺拔，建筑厚重大气，与学校“求实求真，大气大为”的办学理念有机融合，是具有鲜明特色的数字化绿色校园。"},
                        {"itme":61,"xvalue":52,"yvalue":1,"year":"2007","title":"图书馆藏书达近300万册","text":"图书馆纸质藏书120.83万册，数字文献178.55万册。"},
                        {"itme":62,"xvalue":53,"yvalue":0,"year":"2008","title":"待补充信息","text":""},
                        {"itme":63,"xvalue":54,"yvalue":0,"year":"2009","title":"待补充信息","text":""},
                        {"itme":64,"xvalue":55,"yvalue":0,"year":"2010","title":"待补充信息","text":""},
                        {"itme":65,"xvalue":56,"yvalue":0,"year":"2011","title":"待补充信息","text":""},
                        {"itme":66,"xvalue":56,"yvalue":0,"year":"2012","title":"全国一级学科评估结果出炉","text":"全国一级学科评估中，我校共有5个一级学科排名进入全国前十。“电子科学与技术”排名第一，“信息与通信工程”并列第二；工程学、物理学、材料科学和计算机科学等7个学科进入ESI前1%。"},
                        {"itme":67,"xvalue":57,"yvalue":0,"year":"2013","title":"李言荣任我校党委副书记、校长","text":"李言荣，中共党员，中国工程院院士，电子科技大学教授、博士生导师。2017年任四川大学校长（副部级）。2019年任四川省科学技术协会第九届委员会主席，同年当选为亚太材料科学院院士。"},
                        {"itme":68,"xvalue":58,"yvalue":0,"year":"2014","title":"待补充信息","text":""},
                        {"itme":69,"xvalue":59,"yvalue":0,"year":"2015","title":"陈星弼院士荣获奖项","text":"陈星弼院士对高功率MOSFET理论与设计的卓越贡献获得IEEE ISPSD 2015 Pioneer Award。"},
                        {"itme":70,"xvalue":59,"yvalue":1,"year":"2015","title":"获得艺术成就","text":"第四届全国大学生艺术展演中，我们学校的舞蹈《羌寨欢歌》和摄影作品《不止于室》获得一等奖。"},
                        {"itme":71,"xvalue":60,"yvalue":0,"year":"2016","title":"学术排名更新 ","text":"我校进入ARWU2016年世界大学学术排行榜前400名。"},
                        {"itme":72,"xvalue":61,"yvalue":0,"year":"2017","title":"设立“电子科大日” ","text":"成都市政府将9月29日设立为“电子科大日”。双方共同举办产业发展峰会、高端论坛、成果对接等系列活动，推动构筑名城名校“命运共同体”。"},
                        {"itme":73,"xvalue":61,"yvalue":1,"year":"2017","title":"入选双一流大学名单","text":"2017年9月，学校迈入“双一流”A类大学建设行列。"},
                        {"itme":74,"xvalue":61,"yvalue":2,"year":"2017","title":"入选双一流学科","text":"“电子科学与技术”，“信息与通信工程”两个学科入选“双一流”建设学科名单。"},
                        {"itme":75,"xvalue":61,"yvalue":3,"year":"2017","title":"匿名校友捐赠，助力学校发展","text":"一位匿名的爱心校友在学校的东湖畔捐赠了一栋大楼。这栋大楼与2018年校庆之际正式建设，并命名为“宣邦楼“，这座大楼的设计灵感来自于计算机二进制。"},
                        {"itme":76,"xvalue":62,"yvalue":0,"year":"2018","title":"荣获国家科技奖项","text":"我校获得一项科技进步奖和两项技术发明奖。"},
                        {"itme":77,"xvalue":62,"yvalue":1,"year":"2018","title":"举办电子信息发展高峰论坛","text":"2018年9月29日，在成电62岁生日之际，学校以“一流大学、一流产业、一线城市”为主题，在成电会堂举行了电子信息发展高峰论坛暨电子科技大学行业校友会成立大会。"},
                        {"itme":78,"xvalue":62,"yvalue":2,"year":"2018","title":"陈星弼院士入选ISPSD首届名人堂","text":"2018年5月，功率半导体领域最顶级的学术年会——第三十届国际功率半导体器件与集成电路年会（IEEE ISPSD 2018）在美国芝加哥举行。我校陈星弼院士因对超结功率半导体器件的卓越贡献入选ISPSD首届名人堂，成为国内首位入选名人堂的华人科学家。"},
                        {"itme":79,"xvalue":62,"yvalue":3,"year":"2018","title":"16名学者入选“全球高被引科学家名单” ","text":"科睿唯安发布的2018年“全球高被引科学家名单”中我校16名学者入选，入选人数仅次于清华、北大和浙大，位居中国大陆及港澳台地区高校第四，进入亚洲高校前十。"},
                        {"itme":80,"xvalue":62,"yvalue":4,"year":"2018","title":"创电子设计竞赛获奖记录","text":"英特尔杯大学生电子设计竞赛嵌入式系统专题邀请赛全球总决赛中，电子科技大学共斩获一等奖3项、二等奖1项，获奖数量位居全球参赛高校第一，并创造了该项赛事举办以来单所高校所获一等奖最多的记录。"},
                        {"itme":81,"xvalue":62,"yvalue":5,"year":"2018","title":"曾勇任我校校长","text":"2018年10月11日 曾勇任我校校长。曾勇，清华大学工学学士、工学硕士和管理学博士，曾在香港中文大学财务学系从事博士后研究。中国致公党党员，教授，博士生导师。中国致公党第十五届中央委员会委员。从事公司财务与资本市场、金融工程的研究和教学工作。"},
                        {"itme":82,"xvalue":63,"yvalue":0,"year":"2019","title":"图书馆藏书量再破新高","text":"图书馆纸质藏书276万册，数字文献资源220TB（包含各类网络数字图书共计983万册）。"},
                        // {"itme":,"xvalue":,"yvalue":,"year":"","title":"","text":""},
                        // {"itme":,"xvalue":,"yvalue":,"year":"","title":"","text":""},
                        // {"itme":,"xvalue":,"yvalue":,"year":"","title":"","text":""},
                        // {"itme":,"xvalue":,"yvalue":,"year":"","title":"","text":""},
                        // {"itme":,"xvalue":,"yvalue":,"year":"","title":"","text":""},
                        // {"itme":,"xvalue":,"yvalue":,"year":"","title":"","text":""},

                      ];

  var informationTime = new Array;
  var informationTitle = new Array;
  var values = new Array;
  var data = new Array;
  for (i=0;i<82;i++){
    informationTime[i] = histoInformation[i].year;
    informationTitle[i] = histoInformation[i].title;
    values[i] = histoInformation[i].text;
    data[i] = {x:histoInformation[i].xvalue, y:histoInformation[i].yvalue};
  }


  
const ScatterChart = Vue.component('scatter-chart', {
extends: VueChartJs.Scatter,	



  data () {
  	return {
      informationTime,
      informationTitle,
      values,
    }
  },
  mounted () {
      
    this.renderChart({
      labels: [],
      datasets: [
        {
            label: '',
            backgroundColor:'	rgba(27,48,101,1)',
            pointHoverBackgroundColor:'rgba(13,105,255,1)',

            pointradius:7,
            data,
          }
    ]
    }, {responsive: true, maintainAspectRatio: false, onClick:this.handle,
        
        scales: {
            xAxes: [{
                gridLines: {
                    display:false,
                    color: "rgba(0, 0, 0, 0)",
                },
                ticks:{
                    display:false
                }
            }],
            yAxes: [{
                ticks:{
                    display:false
                },
                gridLines: {
                    display: false,
                    color: "rgba(0, 0, 0, 0)",
                }   
            }]
        },
        legend:{
            display: false,
            labels:{
                display:false
            }
        },
    
        tooltips:{
            enabled:false
        },
        elements:{
            point:{
              radius:8,
              hitRadius:8,
              hoverRadius:7,
              backgroundColor:'	rgba(84,150,255,1)',
            }
          },
    
                layout:{
                padding:{
                    left:150,
                    right:0,
                    top:260,
                    bottom:10
                }}
    
    })
  },
  methods: {
      
  	handle (point, event) {
        const item = event[0]
        var text =  this.values[item._index]
        var image = this.informationTitle[item._index]
        var time = this.informationTime[item._index]

        const titleFadeOut = document.querySelector('#title');
        titleFadeOut.classList.add('animated','fadeOut');

        var setSrc = document.getElementById("setImageSrc");

        if(histoInformation[item._index].image == true){
          var hideInforImage = document.getElementById("inforImage");
          hideInforImage.style.display = "block";
          setSrc.setAttribute("src",histoInformation[item._index].imageSrc);
        }else{
          var hideInforImage = document.getElementById("inforImage");
          hideInforImage.style.display = "none";
        }


        
        setTimeout(() => {
          var hideTitle1 = document.getElementById("title");
          hideTitle1.style.display = "none";

          var hideBlock = document.getElementById("hide");
          hideBlock.style.display = "block";
          hideBlock.classList.add('animated','fadeIn');

          var hideTitle2 = document.getElementById("title2");
          hideTitle2.style.display = "block";
          hideTitle2.classList.add('animated','fadeIn','delay-1s')

        }, 100);
    


        this.$emit('on-receive', {
        text,
        image,
        time
        }  
      )
    }
  }
})

new Vue({
  el: "#app",
  data () {
  	return {
        informationText: ``,
        informationImage:``,
        informationTime:``
        
    }
  },
  components: {
  	'scatter-chart': ScatterChart
  },
  methods: {
  	update (data) {
        this.informationText = data.text;
        this.informationImage = data.image;
        this.informationTime = data.time;
        hideBlock.style.display = "block";

    }
  }
  
})
