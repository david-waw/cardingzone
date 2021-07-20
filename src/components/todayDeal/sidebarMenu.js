import * as RiIcons from 'react-icons/ri';

export const MenuItems = [
    {
      title: 'SHOP/BROWSE ALL',
      path: '/ShopPage',
      cName: 'dropdown-link'
    },
    {
      title: 'Bank Drops',
      path: '#',
        cName: 'dropdown-link',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
          iconOpened:<RiIcons.RiArrowUpSFill/>,
      subNav: [
        {
          title: 'Bank Drops',
          path: '/bankdrops',
          cName: 'dropdown-link',
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
        },
      {  title: 'Belgium',
        path: '/bankdrops/belgium',
          cName: 'dropdown-link',  
        },
        {  title: 'Belgium N26',
        path: '/bankdrops/belgium/N26',
          cName: 'dropdown-link',
       },
        {  title: 'France',
        path: '/bankdrops/france',
          cName: 'dropdown-link'
        },
        {  title: 'France HSBC',
        path: '/bankdrops/france/HSBC',
          cName: 'dropdown-link'
        },
        {  title: 'France N26',
        path: '/bankdrops/france/N26',
          cName: 'dropdown-link'
        },
        {  title: 'Germany',
        path: '/bankdrops/germany',
          cName: 'dropdown-link'
        },
        {  title: 'Germany N26',
        path: '/bankdrops/germany/N26',
          cName: 'dropdown-link'
        },
        {  title: 'Ireland',
        path: '/bankdrops/ireland',
          cName: 'dropdown-link'
        },
        {  title: 'Ireland N26',
        path: '/bankdrops/ireland/N26',
          cName: 'dropdown-link'
        },
        {  title: 'Ireland Ulter Bank',
        path: '/bankdrops/ireland/Ulster Bank',
          cName: 'dropdown-link'
        },
        {  title: 'Netherlands',
        path: '/bankdrops/netherlands',
          cName: 'dropdown-link'
        },
        {  title: 'Netherlands N26',
        path: '/bankdrops/netherlands/N26',
          cName: 'dropdown-link'
        },
        {  title: 'United States',
        path: '/bankdrops/usa',
          cName: 'dropdown-link'
        },
        {  title: 'United States capital one',
        path: '/bankdrops/usa/capital one',
          cName: 'dropdown-link'
        },
        {  title: 'United States Chase',
        path: '/bankdrops/usa/chase',
          cName: 'dropdown-link'
        },
        {  title: 'United States Chyme',
        path: '/bankdrops/usa/chyme',
          cName: 'dropdown-link'
        },
        {  title: 'United States Current',
        path: '/bankdrops/usa/current',
          cName: 'dropdown-link'
        },
        {  title: 'United States Go Bank',
        path: '/bankdrops/usa/gobank',
          cName: 'dropdown-link'
        },
        {  title: 'United States GreenDot',
        path: '/bankdrops/usa/greendot',
          cName: 'dropdown-link'
        },
        {  title: 'United States HSBC',
        path: '/bankdrops/usa/hsbc',
          cName: 'dropdown-link'
        },
        {  title: 'United States N26',
        path: '/bankdrops/usa/n26',
          cName: 'dropdown-link'
        },
        {  title: 'United States serve by america express',
        path: '/bankdrops/usa/america express',
          cName: 'dropdown-link'
        },
        {  title: 'United States suntrust',
        path: '/bankdrops/usa/suntrust',
          cName: 'dropdown-link'
        },
        {  title: 'United States t mobile monet',
        path: '/bankdrops/usa/t mobile money',
          cName: 'dropdown-link'
        },
        {  title: 'United States vmeno',
        path: '/bankdrops/usa/vmeno',
          cName: 'dropdown-link'
        },
        {  title: 'United Kingdom',
        path: '/bankdrops/uk',
          cName: 'dropdown-link'
        },
        {  title: 'United Kingdom HSBC',
        path: '/bankdrops/uk/hsbc',
          cName: 'dropdown-link'
        },
        {  title: 'United Kingdom T mobile money',
        path: '/bankdrops/uk/tmobile',
          cName: 'dropdown-link'
        },
      
      ]
    },
    {
      title: 'BTC Mixing Services',
      path: '#',
      cName: 'dropdown-link',
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      subNav: [
       { title: 'BTC Mixing Services',
        path: '/btc',
          cName: 'dropdown-link',
        },
       { title: 'BTC World Wide',
        path: '/btc/worldwide',
        cName: 'dropdown-link',} 
      ]
    },
    {
      title: 'Burners',
      path: '#',
        cName: 'dropdown-link',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
      subNav: [
        {
          title: 'Burners',
          path: '/burners',
          cName: 'dropdown-link',
          iconClosed: <RiIcons.RiArrowDownSFill />,
          iconOpened: <RiIcons.RiArrowUpSFill />,
        },
       { title: 'CellPhones',
        path: '/burners/cellphones',
         cName: 'dropdown-link',
       
        },
        { title: 'CellPhones Africa',
        path: '/burners/cellphones/africa',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones Asia',
        path: '/burners/cellphones asia',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones Australia',
        path: '/burners/cellphones/australia',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones Canada',
        path: '/burners/cellphones/canada',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones Europe',
        path: '/burners/cellphones/europe',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones Newzealand',
        path: '/burners/cellphones neuzeland',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones united Kindom',
        path: '/burners/cellphones/unitedkingdom',
          cName: 'dropdown-link',
        },
        { title: 'CellPhones United States',
        path: '/burners/cellphones',
          cName: 'dropdown-link',
        },
        { title: 'SimCards',
        path: '/burners/simcards',
          cName: 'dropdown-link',
        },
        { title: 'SimCards Algeria',
        path: '/burners/simcards/algeria',
          cName: 'dropdown-link',
        },
        { title: 'SimCards Australia',
        path: '/burners/simcards/australia',
          cName: 'dropdown-link',
        },
        { title: 'SimCards Canada',
        path: '/burners/simcards/canada',
        cName: 'dropdown-link',},
        { title: 'SimCards Egypy',
        path: '/burners/simcards/Egypy',
        cName: 'dropdown-link',},
        { title: 'SimCards France',
        path: '/burners/simcards/france',
        cName: 'dropdown-link',},
        { title: 'SimCards Germany',
        path: '/burners/simcards/germany',
        cName: 'dropdown-link',},
        { title: 'SimCards Ghana',
        path: '/burners/simcards/ghana',
          cName: 'dropdown-link',
        },
        { title: 'SimCards India',
        path: '/burners/simcards/india',
          cName: 'dropdown-link',
        },
        { title: 'SimCards Ireland',
        path: '/burners/simcards/ireland',
        cName: 'dropdown-link',},
        { title: 'SimCards Kenya',
        path: '/burners/simcards/kenya',
        cName: 'dropdown-link',},
        { title: 'SimCards Morroco',
        path: '/burners/simcards/morroko',
          cName: 'dropdown-link',
        },
        { title: 'SimCards Nigeria',
        path: '/burners/simcards/Nigeria',
          cName: 'dropdown-link',
        },
        { title: 'SimCards South Africa',
        path: '/burners/simcards/south Africa',
          cName: 'dropdown-link',
        },
        { title: 'SimCards United Kingdom',
        path: '/burners/simcards/unitedkingdom',
          cName: 'dropdown-link',
        },
        { title: 'SimCards United States',
        path: '/burners/simcards/unitedstates',
        cName: 'dropdown-link',},
      ]
    },
    {
      title: 'Carded E Gift Cards',
      path: '#',
        cName: 'dropdown-link',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
      subNav: [
        {
          title: 'Carded E Gift Cards',
          path: '/cardedegiftcards',
          cName: 'dropdown-link',
        },
        
        { title: 'Australia',
         path: '/cardedegiftcards/Australia',
           cName: 'dropdown-link',
         },
         { title: 'Canada',
         path: '/cardedegiftcards/Canada',
          cName: 'dropdown-link',
        },
        {  title: 'United States',
        path: '/cardedegiftcards/usa',
          cName: 'dropdown-link'
        },
        {  title: 'United Kingdom',
        path: '/cardedegiftcards/uk',
        cName: 'dropdown-link'},
       ]
    },
  {
    title: 'Carded Products',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Carded Products',
        path: '/cardedproducts',
        cName: 'dropdown-link',
      }
      ,
      {
        title: 'Carded Products world wide',
        path: '/cardedproducts/worldwide',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products Apple',
        path: '/cardedproducts/apple',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products apple air pods pro',
        path: '/cardedproducts/apple/airpods',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products Apple Watch Series 5',
        path: '/cardedproducts/apple/watch',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products Apple Ipads',
        path: '/cardedproducts/Apple/ipads',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products Apple Iphones',
        path: '/cardedproducts/apple iphones',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products sumsang',
        path: '/cardedproducts/sumsang',
        cName: 'dropdown-link',
      },
      {
        title: 'Carded Products Sumsang Smartphones',
        path: '/cardedproducts/sumsang/smartphones',
        cName: 'dropdown-link',
      }
    ]
  },
  {
    title: 'Cash App',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Cash app',
        path: '/cashapp',
        cName: 'dropdown-link'
      },
      {
        title: 'Cash App United kingdom',
        path: '/cashapp/uk',
        cName: 'dropdown-link'
      },
      {
        title: 'Cash App United States',
        path: '/cashapp/us',
        cName: 'dropdown-link'
      },
    ],
  },
  {
    title: 'Counterfit Items',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Counterfit Items',
        path: '/counterfititems',
        cName: 'dropdown-link'
      },
      {
        title: 'Counterfit EU-Euro',
        path: '/counterfit/eeueoro',
        cName: 'dropdown-link'
      },
      {
        title: 'Counterfit United Kingdom',
        path: '/counterfitunitedkingdom',
        cName: 'dropdown-link'
      },
      {
        title: 'Counterfit United States',
        path: '/counterfit/usa',
        cName: 'dropdown-link'
      },
    ]
  },
   
    {
      title: 'Deposit Cheques',
      path: '/depositcheques',
      cName: 'dropdown-link'
    },
    {
      title: 'Dumps',
      path: '/dumps',
      cName: 'dropdown-link'
    },
    {
      title: 'Emv Chip Software',
      path: '/emvchipsoftware',
      cName: 'dropdown-link'
    },
  {
    title: 'Fake Id',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Fake id',
        path: '/fakeid',
        cName: 'dropdown-link'
      },
      {
        title: 'Fake id australia',
        path: '/fake id australia',
        cName: 'dropdown-link'
      },
      {
        title: 'Fake Id Canada',
        path: '/fakeidCanada',
        cName: 'dropdown-link'
      },
      {
        title: 'Fake Id France',
        path: '/Fakeid/france',
        cName: 'dropdown-link'
      },
      {
        title: 'Fake id ireland',
        path: '/fakeid/ireland',
        cName: 'dropdown-link'
      },
      {
        title: 'FakeId Newzealand',
        path: '/fakeid/newzealand',
        cName: 'dropdown-link'
      },
      {
        title: 'Fake ID United Kingdom',
        path: '/fakeiduk',
        cName: 'dropdown-link'
      },
      {
        title: 'Fake Id Usa',
        path: '/fakeid/usa',
        cName: 'dropdown-link'
      },
    ]
  },
  {
    title: 'Credit/Debit Cards',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Credit/Debit Cards',
        path: '/credidebit Cards',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Austraria',
        path: '/creditdebitcardsaustralia',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Austraria Random Mixed Cards',
        path: '/creditdebitcardsaustraliarandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Austraria Visa Gold Card',
        path: '/creditdebitcardsaustraliavisa',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Canada',
        path: '/creditdebitcardsCanada',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards canada Random Mixed Cards',
        path: '/creditdebitcardscanadarandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards canada Visa Gold Card',
        path: '/creditdebitcardscanadaliavisa',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Dubai',
        path: '/creditdebitcardsdubai',
        cName: 'dropdown-link'
      },
   
      {
        title: 'Credit/Debit Cards Dubai Random Mixed Cards',
        path: '/creditdebitcardsdubairandommixed',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards france',
        path: '/creditdebitcardsfrance',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards france Random Mixed Cards',
        path: '/creditdebitcardsfrancerandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards france Visa Gold Card',
        path: '/creditdebitcardsfranceliavisa',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards India',
        path: '/creditdebitcardsindia',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards India Random Mixed Cards',
        path: '/creditdebitcardsindiarandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Ireland',
        path: '/creditdebitcardsireland',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards Ireland Random Mixed Cards',
        path: '/creditdebitcardsirelandrandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards newzealand',
        path: '/creditdebitcards/newzealand',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards  newzealand Random Mixed Cards',
        path: '/creditdebitcards/newzealandrandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united kingdom ',
        path: '/creditdebitcardsunitedkingdom ',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united kingdom Random Mixed Cards',
        path: '/creditdebitcardsunitedkingdomrandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united kingdom  Visa Gold Card',
        path: '/creditdebitcardsunitedstatesliavisa',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united states Random Mixed Cards',
        path: '/creditdebitcardsunitedstatesrandom',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united states  Visa Gold Card',
        path: '/creditdebitcardsunitedstatesliavisa',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united states  ',
        path: '/creditdebitcardsunitedstates',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united states  American Express',
        path: '/creditdebitcardsunitedstatesamericanexpress',
        cName: 'dropdown-link'
      },
      {
        title: 'Credit/Debit Cards united states Discover',
        path: '/creditdebitcardsunitedstatesdiscover',
        cName: 'dropdown-link'
      },
    ]
  },
  {
    title: 'dumps',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'dumps',
        path: '/dumps',
        cName: 'dropdown-link'
      },
      {
        title: 'dumps australia',
        path: '/dumps australia',
        cName: 'dropdown-link'
      },
      {
        title: 'dumps Canada',
        path: '/dumpsCanada',
        cName: 'dropdown-link'
      },
      {
        title: 'dumps Denmark',
        path: '/dumps/denmark',
        cName: 'dropdown-link'
      },
      {
        title: 'dumps france',
        path: '/dumps france',
        cName: 'dropdown-link'
      },
   
      {
        title: 'dumps United Kingdom',
        path: '/dumpsduk',
        cName: 'dropdown-link'
      },
      {
        title: 'dumps Usa',
        path: '/dumps/usa',
        cName: 'dropdown-link'
      },
    ]
  },
  {
    title: 'Fraud Contacts',
    path: '/fraudcontacts',
    cName: 'dropdown-link'
  },
    {
      title: 'Groupon',
      path: '/groupon',
      cName: 'dropdown-link'
  },
  {
    title: 'Genesis Market',
    path: '/genesismarket',
    cName: 'dropdown-link'
},
  {
    title: 'Paypal',
    path: '/paypal',
    cName: 'dropdown-link'
},
  {
    title: 'Services For Hire',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {title: 'Services For Hire',
    path: '/sfh',
        cName: 'dropdown-link'
      },
      {title: 'Services For Hire worldwide',
    path: '/sfh/botnet',
        cName: 'dropdown-link'
      },
      {title: 'Services For Hire DDos attacks',
    path: '/sfh/DDos attacks',
        cName: 'dropdown-link'
      },
      {title: 'Services For Hire Random ware as a service',
    path: '/sfh/randomwareasaservice',
        cName: 'dropdown-link'
      },
      {title: 'Services For Hire Spamming',
    path: '/sfh/spamming',
        cName: 'dropdown-link'
      },
      
    ]
  },
  {
    title: 'Softwares',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {title: 'Softwares',
      path: '/softwares',
        cName: 'dropdown-link',
      },
      {title: 'Softwares WorldWide',
      path: '/softwares/worldwide',
        cName: 'dropdown-link',
      },
      {title: 'Softwares Anti Detect',
      path: '/softwares/worldwide/antidetect',
        cName: 'dropdown-link',
      },
      {title: 'Softwares WorldWide Darkweb',
      path: '/softwares/worldwide/darkweb',
        cName: 'dropdown-link',
      },
      {title: 'Softwares WorldWide EMV Chip Software',
      path: '/softwares/worldwide/emv',
        cName: 'dropdown-link',
      },
      {title: 'Softwares WorldWide Fraud',
      path: '/softwares/worldwide/fraud',
      cName: 'dropdown-link',}
    ]
  },
  {
    title: 'SSN Fullz',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'SSN Fullz Australia',
        path: '/ssnfullz/australia',
        cName: 'dropdown-link',
      },
      {
        title: 'SSN Fullz Canada',
        path: '/ssnfullz/canada',
        cName: 'dropdown-link',
      },
      {
        title: 'SSN Fullz Newzealand',
        path: '/ssnfullz/newzealand',
        cName: 'dropdown-link',
      },
      {
        title: 'SSN Fullz United States',
        path: '/ssnfullz/us',
        cName: 'dropdown-link',
      },
      {
        title: 'SSN Fullz United Kingdom',
        path: '/ssnfullz/uk',
        cName: 'dropdown-link',
      },
    
    ]
  },
  {
    title: 'Mentorship',
    path: '#',
    cName: 'dropdown-link',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Mentorship',
        path: '/mentershipandcoaching',
        cName: 'dropdown-link',
      },
      {
        title: 'Advanced carding',
        path: '/advancedcarding',
        cName: 'dropdown-link',
      },
      {
        title: 'Advanced Cash App Masterclass',
        path: '/advancedcashapp',
        cName: 'dropdown-link',
      },
      {
        title: 'Advanced Dumps Masterclass',
        path: '/advanceddumps',
        cName: 'dropdown-link',
      },
      {
        title: 'Advanced Paypal Masterclass',
        path: '/advancedpaypal',
        cName: 'dropdown-link',
      },
      {
        title: 'Advanced Venmo Masterclass',
        path: '/advanced venmo',
        cName: 'dropdown-link',
      },
    
    
    ]
  },
    {
      title: 'Venmo',
      path: '/venmo ',
      cName: 'dropdown-link'
  },
    
  {
    title: 'Western Union',
    path: '/westernunion',
    cName: 'dropdown-link'
  }
  ];
export default  MenuItems