export default [
  { name : "1级紫宝石", desc : "HP+500 击回+300",
    attrs : {
      functional : {
        blood : +500,
        hitBack : +300,
      },
      describe : {

      }
    }
  },
  { name : "2级紫宝石",   desc : "HP+700 击回+400"，
    attrs : {
      functional : {
        blood : +700,
        hitBack : +400,
      },
      describe : {

      }
    }
  },
  { name : "3级紫宝石", desc : "HP+1000 击回+500"，
    attrs : {
      functional : {
        blood : +1000,
        hitBack : +500,
      },
      describe : {

      }
    }
  },
  { name : "4级紫宝石", desc : "HP+1500 击回+700",
    attrs : {
      functional : {
        blood : +1500,
        hitBack : +700,
      },
      describe : {

      }
    }
  },
  { name : "5级紫宝石", desc : "HP+2000 击回+1000",
    attrs : {
      functional : {
        blood : +2000,
        hitBack : +1000,
      },
      describe : {

      }
    }
  },
  { name : "6级紫宝石", desc : "HP+2800 击回+1500",
    attrs : {
      functional : {
        blood : +2800,
        hitBack : +1500,
      },
      describe : {

      }
    }
  },
  {
    name : "7级紫宝石",
    desc : "HP+4000 击回+2500",
    attrs : {
      functional : {
        blood : +4000,
        hitBack : +2500,
      },
      describe : {

      }
    }
  }
].map((item, index) => Obj.deepCover({
  id : index,
  attrs : {
    functional : {

    },
    describe : {
      color : 'violet'
    }
  }
},item))
