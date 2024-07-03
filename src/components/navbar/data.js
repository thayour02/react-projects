
export const menus = [
    {
        label :"Home",
        to:'/',
        children:[
            {
                label:'Contact Us',
                to:"Contact Us"
            }
        ]
    },
    {
        label:"profile",
        to:"/profile",
        children:[
            {
                label:'Details',
                to:'details',
        children:[
            {
                label:'Location',
                to:'location',
                children:[
                    {
                        label:"city",
                        to:'city'
                    }
                ]       
            },
            ],        
            },
        ],
    },
    {
        label:"Settings",
        to:"/settings",
        children:[
            {
                label:"account",
                to:"account",
                children:[
                    {
                        label:'Premium User',
                        to:"premium"
                    },{
                        label:'Free User',
                        to:"free"
                    }
                ],
            },{
                  label:"security",
                to:"security",
                children:[
                    {
                    label:"login",
                    to:"login"
                    },{
                        label:"Register",
                        to:'register'
                    }           
                ]
            }
        ]
    }
]

export default menus