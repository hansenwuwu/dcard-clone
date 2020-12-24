# dcard-clone with ptt-posts
Create a "Dcard" like webpage by React. 
And fill with ptt-posts that craw by backend server (maybe fastAPI). 
(only for my study use) 
 
### React structure
```
.
├── Root                            # Under App.js
│   ├── Header                      # 上方的導航列, 搜尋列(要依照看板不同，搜尋不同版, 登入登出狀態)
│   ├── Body                        # 中間區塊
│   │   ├── Forum                   # 文章頁面
│   │   │   ├── ForumNavigator      # 看板選區 (fixed)
│   │   │   │   ├── ForumListFixed  #
│   │   │   │   └── ForumList       #
│   │   │   ├── ForumBody           # 文章清單
│   │   │   │   └── Post            # 單一文章
│   │   │   └── Commercial          # 側邊廣告欄
│   │   ├── Personal          
│   │   └── Other               
│   └── Other
└── README.md
```