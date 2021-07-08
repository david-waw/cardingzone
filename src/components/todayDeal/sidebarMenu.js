import * as RiIcons from 'react-icons/ri';

export const MenuItems = [
    {
      title: 'SHOP/BROWSE ALL',
      path: '/ShopPage',
      cName: 'dropdown-link'
    },
    {
      title: 'Bank Drops',
      path: '/bankdrops',
        cName: 'dropdown-link',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
          iconOpened:<RiIcons.RiArrowUpSFill/>,
      subNav: [
      {  title: 'Belgium',
        path: '/bankdrops/belgium',
          cName: 'dropdown-link'
        },
        {  title: 'France',
        path: '/bankdrops/france',
          cName: 'dropdown-link'
        },
        {  title: 'Germany',
        path: '/bankdrops/germany',
          cName: 'dropdown-link'
        },
        {  title: 'Ireland',
        path: '/bankdrops/ireland',
          cName: 'dropdown-link'
        },
        {  title: 'Netherlands',
        path: '/bankdrops/netherlands',
          cName: 'dropdown-link'
        },
        {  title: 'United States',
        path: '/bankdrops/usa',
          cName: 'dropdown-link'
        },
        {  title: 'United Kingdom',
        path: '/bankdrops/uk',
        cName: 'dropdown-link'},
      ]
    },
    {
      title: 'BTC World Wide',
      path: '/btcworld',
      cName: 'dropdown-link'
    },
    {
      title: 'Burners',
      path: '/burners',
        cName: 'dropdown-link',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
      subNav: [
       { title: 'CellPhones',
        path: '/burners/cellphones',
          cName: 'dropdown-link',
        },
        { title: 'SimCards',
        path: '/burners/simcards',
        cName: 'dropdown-link',},
      ]
    },
    {
      title: 'Carded E Gift Cards',
      path: '/cardedegiftcards',
        cName: 'dropdown-link',
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
      subNav: [
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
      title: 'Carded products',
      path: '/cardedeproducts',
      cName: 'dropdown-link'
    },
    {
      title: 'Cash App',
      path: '/cashapp',
      cName: 'dropdown-link'
    },
    {
      title: 'Counterfit items',
      path: '/counterfititems',
      cName: 'dropdown-link'
    },
    {
      title: 'Credit Debit Cards',
      path: '/creditdebitcards',
      cName: 'dropdown-link'
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
      title: 'FakeId',
      path: '/fakeId',
      cName: 'dropdown-link'
    },
    {
      title: 'Groupon',
      path: '/groupon',
      cName: 'dropdown-link'
    },
    {
      title: 'Mentorship and Coaching',
      path: '/mentershipandcoaching ',
      cName: 'dropdown-link'
    }
  ];
export default  MenuItems