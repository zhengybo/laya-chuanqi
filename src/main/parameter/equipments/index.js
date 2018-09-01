
const equipmentType = [
  { id : 0, name : "胸部" },
  { id : 1, name : "主手" },
  { id : 2, name : "副手" },
  { id : 3, name : "头部" },
  { id : 4, name : "肩部" },
  { id : 5, name : "护符" },
  { id : 6, name : "手部" },
  { id : 7, name : "手腕" },
  { id : 8, name : "腰带" },
  { id : 9, name : "裤子" },
  { id : 10, name : "脚部" },
  { id : 11, name : "左戒" },
  { id : 12, name : "右戒" },
  { id : 90, name : "打孔石" },
  { id : 91, name : "其它" },
  { id : 92, name : "宝石" }
]

const diamondType = [
  {
    id : 0,
    name : "拉玛兰迪礼物",
    desc : "打孔用品"
  },
  {
    id : 0,
    name : "未镶嵌",
    desc : "未镶嵌"
  },
  {
    id : 0,
    name : "1级黄宝石",
    desc : "力量+10"
  },
  {
    id : 0,
    name : "2级黄宝石",
    desc : "力量+20"
  },
  {
    id : 0,
    name : "3级黄宝石",
    desc : "力量+30"
  },
  {
    id : 0,
    name : "4级黄宝石",
    desc : "力量+50"
  },
  {
    id : 0,
    name : "5级黄宝石",
    desc : "力量+80"
  },
  {
    id : 0,
    name : "6级黄宝石",
    desc : "力量+110"
  },
  {
    id : 0,
    name : "7级黄宝石",
    desc : "力量+150"
  },
  {
    id : 0,
    name : "1级黄宝石",
    desc : "力量+10"
  },
  {
    id : 0,
    name : "2级黄宝石",
    desc : "力量+20"
  },
  {
    id : 0,
    name : "3级黄宝石",
    desc : "力量+30"
  },
  {
    id : 0,
    name : "4级黄宝石",
    desc : "力量+50"
  },
  {
    id : 0,
    name : "5级黄宝石",
    desc : "力量+80"
  },
  {
    id : 0,
    name : "6级黄宝石",
    desc : "力量+110"
  },
  {
    id : 0,
    name : "7级黄宝石",
    desc : "力量+150"
  },
]
//类型
function checktype(type) {
    switch (type) {
        case 0:
            return "胸部";
        case 1:
            return "主手";
        case 2:
            return "副手";
        case 3:
            return "头部";
        case 4:
            return "肩部";
        case 5:
            return "护符";
        case 6:
            return "手部";
        case 7:
            return "手腕";
        case 8:
            return "腰带";
        case 9:
            return "裤子";
        case 10:
            return "脚部";
        case 11:
            return "左戒";
        case 12:
            return "右戒";
        case 89:
            return "打孔石";
        case 90:
            return "其它";
        case 99:
            return "宝石";
    }
}

//类型
function checkdiamond(diamond) {
    switch (diamond) {
        case "拉玛兰迪礼物":
            return "  打孔用品";
        case "未镶嵌":
            return "  未镶嵌";
        case "1级黄宝石":
            return "力量+10";
        case "2级黄宝石":
            return "力量+20";
        case "3级黄宝石":
            return "力量+30";
        case "4级黄宝石":
            return "力量+50";
        case "5级黄宝石":
            return "力量+80";
        case "6级黄宝石":
            return "力量+110";
        case "7级黄宝石":
            return "力量+150";
        case "1级红宝石":
            return "智力+10";
        case "2级红宝石":
            return "智力+20";
        case "3级红宝石":
            return "智力+30";
        case "4级红宝石":
            return "智力+50";
        case "5级红宝石":
            return "智力+80";
        case "6级红宝石":
            return "智力+110";
        case "7级红宝石":
            return "智力+150";

        case "1级绿宝石":
            return "敏捷+10";
        case "2级绿宝石":
            return "敏捷+20";
        case "3级绿宝石":
            return "敏捷+30";
        case "4级绿宝石":
            return "敏捷+50";
        case "5级绿宝石":
            return "敏捷+80";
        case "6级绿宝石":
            return "敏捷+110";
        case "7级绿宝石":
            return "敏捷+150";

        case "1级钻石":
            return "暴伤+3% CD-1%";
        case "2级钻石":
            return "暴伤+5% CD-1%";
        case "3级钻石":
            return "暴伤+8% CD-2%";
        case "4级钻石":
            return "暴伤+12% CD-2%";
        case "5级钻石":
            return "暴伤+18% CD-3%";
        case "6级钻石":
            return "暴伤+25% CD-4%";
        case "7级钻石":
            return "暴伤+35% CD-5%";


        case "1级紫宝石":
            return "HP+500 击回+300";
        case "2级紫宝石":
            return "HP+700 击回+400";
        case "3级紫宝石":
            return "HP+1000 击回+500";
        case "4级紫宝石":
            return "HP+1500 击回+700";
        case "5级紫宝石":
            return "HP+2000 击回+1000";
        case "6级紫宝石":
            return "HP+2800 击回+1500";
        case "7级紫宝石":
            return "HP+4000 击回+2500";

    }
}
