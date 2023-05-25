type Subchapter = {
  title: string;
};

type Chapter = {
  title: string;
  subchapters: Subchapter[];
};

type courseHierarchyType = {
  tag: string[];
  title: string;
  chapters: Chapter[];
};

/** 狗狗訓練 */
const dogTrainings: courseHierarchyType[] = [
  {
    tag: ['狗狗訓練'],
    title: '狗狗訓練入門課程',
    chapters: [
      {
        title: '基礎知識',
        subchapters: [
          {
            title: '犬種介紹',
          },
          {
            title: '飼養要求',
          },
          {
            title: '正確使用訓練工具',
          },
        ],
      },
      {
        title: '基本指令',
        subchapters: [
          {
            title: '坐下指令',
          },
          {
            title: '握手指令',
          },
          {
            title: '躺下指令',
          },
        ],
      },
      {
        title: '問題行為處理',
        subchapters: [
          {
            title: '拉扯繩索問題',
          },
          {
            title: '叫吠問題',
          },
          {
            title: '咬人問題',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '狗狗間相處',
          },
          {
            title: '與人類相處',
          },
          {
            title: '與其他動物相處',
          },
        ],
      },
      {
        title: '進階技巧',
        subchapters: [
          {
            title: '跳躍指令',
          },
          {
            title: '捷徑指令',
          },
          {
            title: '尋找物品指令',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '高效狗狗訓練方法',
    chapters: [
      {
        title: '理解狗狗行為',
        subchapters: [
          {
            title: '狗狗的社會結構',
          },
          {
            title: '狗狗的溝通方式',
          },
          {
            title: '狗狗的基本需求',
          },
        ],
      },
      {
        title: '建立基本指令',
        subchapters: [
          {
            title: '關鍵指令：坐下、待命、回來',
          },
          {
            title: '拴繩訓練技巧',
          },
          {
            title: '正確使用獎勵和懲罰',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '吠叫和咬人問題處理',
          },
          {
            title: '抓咬和破壞行為處理',
          },
          {
            title: '解決拉扯繩索問題',
          },
        ],
      },
      {
        title: '訓練技巧提升',
        subchapters: [
          {
            title: '跳躍和越獄防止技巧',
          },
          {
            title: '高級指令訓練：滾下、取物、跳過等',
          },
          {
            title: '訓練的持久性和巩固',
          },
        ],
      },
      {
        title: '進階訓練與競技',
        subchapters: [
          {
            title: '參與犬隻競技活動',
          },
          {
            title: '培養工作犬的技能',
          },
          {
            title: '展示狗狗的服從性',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '狗狗訓練實戰指南',
    chapters: [
      {
        title: '訓練前準備',
        subchapters: [
          {
            title: '建立良好的訓練環境',
          },
          {
            title: '選擇正確的訓練工具',
          },
          {
            title: '建立良好的人狗關係',
          },
        ],
      },
      {
        title: '基礎訓練',
        subchapters: [
          {
            title: '正確使用獎勵和懲罰',
          },
          {
            title: '訓練基本指令：坐下、待命、召回',
          },
          {
            title: '引導狗狗走路和握手',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '吠叫和咬人問題處理',
          },
          {
            title: '抓咬和破壞行為處理',
          },
          {
            title: '解決拉扯繩索問題',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '跳躍和越獄防止技巧',
          },
          {
            title: '高級指令訓練：滾下、撿東西、扮死等',
          },
          {
            title: '訓練的持久性和巩固',
          },
        ],
      },
      {
        title: '特殊狗狗訓練',
        subchapters: [
          {
            title: '懼怕訓練和社交化',
          },
          {
            title: '狗狗的特殊需求和訓練技巧',
          },
          {
            title: '犬隻競技訓練指南',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '狗狗訓練精通課程',
    chapters: [
      {
        title: '理解狗狗行為',
        subchapters: [
          {
            title: '狗狗的社會結構',
          },
          {
            title: '狗狗的溝通方式',
          },
          {
            title: '狗狗的基本需求',
          },
        ],
      },
      {
        title: '建立基本指令',
        subchapters: [
          {
            title: '關鍵指令：坐下、待命、回來',
          },
          {
            title: '拴繩訓練技巧',
          },
          {
            title: '正確使用獎勵和懲罰',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '吠叫和咬人問題處理',
          },
          {
            title: '抓咬和破壞行為處理',
          },
          {
            title: '解決拉扯繩索問題',
          },
        ],
      },
      {
        title: '訓練技巧提升',
        subchapters: [
          {
            title: '跳躍和越獄防止技巧',
          },
          {
            title: '高級指令訓練：滾下、取物、跳過等',
          },
          {
            title: '訓練的持久性和巩固',
          },
        ],
      },
      {
        title: '進階訓練與競技',
        subchapters: [
          {
            title: '參與犬隻競技活動',
          },
          {
            title: '培養工作犬的技能',
          },
          {
            title: '展示狗狗的服從性',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '高效狗狗訓練技巧',
    chapters: [
      {
        title: '建立訓練基礎',
        subchapters: [
          {
            title: '狗狗的社會化訓練',
          },
          {
            title: '溝通與信任建立',
          },
          {
            title: '基本行為指令',
          },
        ],
      },
      {
        title: '訓練技巧進階',
        subchapters: [
          {
            title: '遠距離指令訓練',
          },
          {
            title: '跳躍和障礙物訓練',
          },
          {
            title: '自主學習與智力訓練',
          },
        ],
      },
      {
        title: '行為修正與問題解決',
        subchapters: [
          {
            title: '吠叫和破壞行為處理',
          },
          {
            title: '恐懼和焦慮問題處理',
          },
          {
            title: '社交化和攻擊行為處理',
          },
        ],
      },
      {
        title: '特殊訓練範疇',
        subchapters: [
          {
            title: '導盲犬訓練',
          },
          {
            title: '搜救犬訓練',
          },
          {
            title: '治療犬訓練',
          },
        ],
      },
      {
        title: '狗狗健康與照顧',
        subchapters: [
          {
            title: '營養與飲食管理',
          },
          {
            title: '適當的運動與活動',
          },
          {
            title: '常見疾病預防和醫療護理',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '狗狗訓練入門課程',
    chapters: [
      {
        title: '基礎訓練',
        subchapters: [
          {
            title: '正確使用獎勵和懲罰',
          },
          {
            title: '建立基本指令：坐下、待命、召回',
          },
          {
            title: '握手和握物品訓練',
          },
        ],
      },
      {
        title: '行為修正',
        subchapters: [
          {
            title: '吠叫和咬人問題處理',
          },
          {
            title: '抓咬和破壞行為處理',
          },
          {
            title: '解決拉扯繩索問題',
          },
        ],
      },
      {
        title: '進階訓練',
        subchapters: [
          {
            title: '跳躍和障礙物訓練',
          },
          {
            title: '高級指令訓練：滾下、取物、趴下等',
          },
          {
            title: '訓練的持久性和巩固',
          },
        ],
      },
      {
        title: '特殊訓練範疇',
        subchapters: [
          {
            title: '導盲犬訓練',
          },
          {
            title: '搜救犬訓練',
          },
          {
            title: '治療犬訓練',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '高效狗狗訓練課程',
    chapters: [
      {
        title: '狗狗行為與心理',
        subchapters: [
          {
            title: '狗狗社會化與環境適應',
          },
          {
            title: '狗狗語言與溝通方式',
          },
          {
            title: '狗狗行為問題的原因與處理',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立基本指令：坐下、待命、召回',
          },
          {
            title: '繩索和牽引訓練',
          },
          {
            title: '獎勵和懲罰的適當使用',
          },
        ],
      },
      {
        title: '進階訓練',
        subchapters: [
          {
            title: '跳躍和障礙訓練',
          },
          {
            title: '行為修正與習慣塑造',
          },
          {
            title: '高級指令訓練：倒下、繞圈等',
          },
        ],
      },
      {
        title: '特殊訓練技巧',
        subchapters: [
          {
            title: '導盲犬訓練',
          },
          {
            title: '搜救犬訓練',
          },
          {
            title: '警犬訓練',
          },
        ],
      },
      {
        title: '狗狗健康與照顧',
        subchapters: [
          {
            title: '營養與飲食管理',
          },
          {
            title: '適當的運動與活動',
          },
          {
            title: '常見疾病預防和醫療護理',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '實用狗狗訓練指南',
    chapters: [
      {
        title: '了解狗狗行為',
        subchapters: [
          {
            title: '狗狗社會化和人際互動',
          },
          {
            title: '理解狗狗的情緒和表達方式',
          },
          {
            title: '處理狗狗的恐懼和焦慮',
          },
        ],
      },
      {
        title: '基礎訓練',
        subchapters: [
          {
            title: '建立基本指令：坐下、待命、召回',
          },
          {
            title: '牽繩訓練和散步禮儀',
          },
          {
            title: '鼻腦訓練遊戲',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '跳躍和障礙物訓練',
          },
          {
            title: '建立持久性和忍耐力',
          },
          {
            title: '高級指令訓練：翻滾、躺下等',
          },
        ],
      },
      {
        title: '行為修正與問題解決',
        subchapters: [
          {
            title: '解決吠叫和咬人問題',
          },
          {
            title: '控制抓咬和破壞行為',
          },
          {
            title: '處理狗狗的食物和資源保衛',
          },
        ],
      },
      {
        title: '特殊訓練範疇',
        subchapters: [
          {
            title: '狗狗競技訓練：擲球、飛盤等',
          },
          {
            title: '狗狗表演和服從訓練',
          },
          {
            title: '訓練導盲犬的基本技巧',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '實用狗狗訓練技巧',
    chapters: [
      {
        title: '建立基礎',
        subchapters: [
          {
            title: '狗狗的社會化和習慣化',
          },
          {
            title: '正確的糧食訓練方法',
          },
          {
            title: '遊戲和激勵訓練',
          },
        ],
      },
      {
        title: '基本指令',
        subchapters: [
          {
            title: '教授狗狗基本指令：坐下、待命、召回',
          },
          {
            title: '解決狗狗的牽引和拖行問題',
          },
          {
            title: '建立狗狗的待命和靜止指令',
          },
        ],
      },
      {
        title: '行為修正',
        subchapters: [
          {
            title: '控制狗狗的吠叫和咬嚼行為',
          },
          {
            title: '解決狗狗的分離焦慮問題',
          },
          {
            title: '處理狗狗的恐懼和敏感',
          },
        ],
      },
      {
        title: '進階訓練',
        subchapters: [
          {
            title: '高級指令訓練：翻滾、打滾、起舞等',
          },
          {
            title: '訓練狗狗的鼻腦能力',
          },
          {
            title: '提升狗狗的持久力和耐心',
          },
        ],
      },
      {
        title: '特殊訓練',
        subchapters: [
          {
            title: '訓練導盲犬和輔助犬',
          },
          {
            title: '訓練搜救犬和警犬',
          },
          {
            title: '狗狗的娛樂表演和技巧展示',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗訓練'],
    title: '實用狗狗訓練指南',
    chapters: [
      {
        title: '狗狗行為分析',
        subchapters: [
          {
            title: '理解狗狗的身體語言',
          },
          {
            title: '分析狗狗不良行為的原因',
          },
          {
            title: '改善狗狗的社交技巧',
          },
        ],
      },
      {
        title: '基礎訓練',
        subchapters: [
          {
            title: '建立基本指令：坐下、待命、握手',
          },
          {
            title: '牽繩訓練和領導地位建立',
          },
          {
            title: '糧食和語言激勵訓練',
          },
        ],
      },
      {
        title: '進階訓練',
        subchapters: [
          {
            title: '跳躍和障礙物訓練',
          },
          {
            title: '建立狗狗的待命和靜止指令',
          },
          {
            title: '提高狗狗的集中力和反應能力',
          },
        ],
      },
      {
        title: '行為修正',
        subchapters: [
          {
            title: '解決狗狗的吠叫和咬嚼問題',
          },
          {
            title: '控制狗狗的分離焦慮和恐懼',
          },
          {
            title: '解決狗狗的食物和資源保衛行為',
          },
        ],
      },
      {
        title: '特殊訓練技巧',
        subchapters: [
          {
            title: '狗狗的搜救訓練',
          },
          {
            title: '警犬訓練和追蹤能力培養',
          },
          {
            title: '訓練狗狗參與犬隻競技活動',
          },
        ],
      },
    ],
  },
];

/** 貓咪食譜 */
const catRecipes: courseHierarchyType[] = [
  {
    tag: ['貓咪食譜'],
    title: '美味貓咪食譜收集',
    chapters: [
      {
        title: '主食',
        subchapters: [
          {
            title: '自製貓咪餐：雞肉和米飯',
          },
          {
            title: '魚肉湯粥：三文魚和糙米粥',
          },
          {
            title: '蔬菜雞肉卷：胡蘿蔔、豌豆和雞肉',
          },
        ],
      },
      {
        title: '小食',
        subchapters: [
          {
            title: '貓咪零食：自製鮪魚零食',
          },
          {
            title: '營養點心：雞肝和南瓜糕點',
          },
          {
            title: '脆脆貓：自製雞肉乾',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '貓咪生日蛋糕：鮪魚和奶油蛋糕',
          },
          {
            title: '懷舊美食：紅燒雞肉煲仔飯',
          },
          {
            title: '節慶佳餚：糖漬火雞胸配燉南瓜',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '健康貓咪飲食指南',
    chapters: [
      {
        title: '主食餐點',
        subchapters: [
          {
            title: '優質蛋白：雞肉和魚肉拌飯',
          },
          {
            title: '營養穀物：糙米雞肉湯',
          },
          {
            title: '營養均衡：紅肉蔬菜煮糊',
          },
        ],
      },
      {
        title: '小食點心',
        subchapters: [
          {
            title: '貓咪零食：自製鮪魚脆片',
          },
          {
            title: '營養點心：蛋白乳酪餅乾',
          },
          {
            title: '健康點心：南瓜燕麥小球',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '節慶大餐：火雞肉蔓越莓卷',
          },
          {
            title: '健腸好物：南瓜鮭魚軟糕',
          },
          {
            title: '美毛養顏：藍莓雞胸羹',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '美味貓咪健康飲食指南',
    chapters: [
      {
        title: '主食餐點',
        subchapters: [
          {
            title: '雞肉白飯營養餐',
          },
          {
            title: '鮭魚蔬菜糙米飯',
          },
          {
            title: '紅肉豆腐餐',
          },
        ],
      },
      {
        title: '小食點心',
        subchapters: [
          {
            title: '鮪魚雞蛋餅',
          },
          {
            title: '奶油南瓜雞條',
          },
          {
            title: '鮮蔬雞肉卷',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '蛤蠣魚片盛宴',
          },
          {
            title: '干貝南瓜蛋餅',
          },
          {
            title: '燒烤鮭魚配青豆',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '健康貓咪餐點精選',
    chapters: [
      {
        title: '主食',
        subchapters: [
          {
            title: '優質蛋白：雞胸肉配米飯',
          },
          {
            title: '魚肉湯粥：三文魚糙米粥',
          },
          {
            title: '蔬菜餐：胡蘿蔔、豌豆和燕麥',
          },
        ],
      },
      {
        title: '小食',
        subchapters: [
          {
            title: '貓咪零食：自製鮪魚乾',
          },
          {
            title: '營養點心：雞肝奶酪球',
          },
          {
            title: '脆脆貓：自製雞肉脆片',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '貓咪生日大餐：鮪魚蛋糕',
          },
          {
            title: '豪華海鮮套餐：龍蝦配鯛魚',
          },
          {
            title: '節慶佳餚：烤火雞配南瓜',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '美味貓咪健康飲食指南',
    chapters: [
      {
        title: '主食餐點',
        subchapters: [
          {
            title: '雞蓉糙米飯',
          },
          {
            title: '鮭魚蔬菜湯粥',
          },
          {
            title: '蔬菜雞肉燉飯',
          },
        ],
      },
      {
        title: '小食點心',
        subchapters: [
          {
            title: '鮪魚雞蛋餅乾',
          },
          {
            title: '南瓜奶油小球',
          },
          {
            title: '雞肉胡蘿蔔捲',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '煙燻鮭魚蛋糕',
          },
          {
            title: '蝦仁南瓜慕斯',
          },
          {
            title: '慢煮雞肉配蔬菜',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '美味貓咪料理大全',
    chapters: [
      {
        title: '主食餐點',
        subchapters: [
          {
            title: '雞肉燉飯',
          },
          {
            title: '鮭魚蔬菜湯粥',
          },
          {
            title: '牛肉糙米餐',
          },
        ],
      },
      {
        title: '小食點心',
        subchapters: [
          {
            title: '自製鮪魚零食',
          },
          {
            title: '雞肝脆片',
          },
          {
            title: '南瓜奶酪球',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '蛤蠣魚片湯',
          },
          {
            title: '干貝紅蘿蔔糕',
          },
          {
            title: '燒烤鮭魚蔬菜',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '貓咪美食天堂',
    chapters: [
      {
        title: '主食餐點',
        subchapters: [
          {
            title: '嫩雞胸肉燉飯',
          },
          {
            title: '三文魚蔬菜糙米飯',
          },
          {
            title: '香煎鯛魚配燕麥',
          },
        ],
      },
      {
        title: '小食點心',
        subchapters: [
          {
            title: '鮪魚雞蛋餅',
          },
          {
            title: '奶油南瓜肉球',
          },
          {
            title: '鮮蔬雞胸肉卷',
          },
        ],
      },
      {
        title: '特殊餐點',
        subchapters: [
          {
            title: '鮭魚蝦仁湯燉飯',
          },
          {
            title: '干貝南瓜蓉餅',
          },
          {
            title: '烤火雞配青豆蔬菜',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '自製貓咪美食',
    chapters: [
      {
        title: '肉類食譜',
        subchapters: [
          {
            title: '簡單雞肉煮飯',
          },
          {
            title: '紅燒牛肉湯',
          },
          {
            title: '火雞肉雞蛋捲',
          },
        ],
      },
      {
        title: '魚類食譜',
        subchapters: [
          {
            title: '煮鮮魚片',
          },
          {
            title: '鮭魚燉蛋',
          },
          {
            title: '香煎鯖魚',
          },
        ],
      },
      {
        title: '素食食譜',
        subchapters: [
          {
            title: '蔬菜燉米飯',
          },
          {
            title: '南瓜餅乾',
          },
          {
            title: '紅蘿蔔素肉丸',
          },
        ],
      },
      {
        title: '特殊食譜',
        subchapters: [
          {
            title: '鴨肉蔓越莓餅乾',
          },
          {
            title: '鯊魚燉雞湯',
          },
          {
            title: '蜂蜜火腿餅',
          },
        ],
      },
      {
        title: '點心食譜',
        subchapters: [
          {
            title: '鯡魚蘋果薄餅',
          },
          {
            title: '奶酪雞蛋捲',
          },
          {
            title: '南瓜小餅乾',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '貓咪美味料理',
    chapters: [
      {
        title: '雞肉料理',
        subchapters: [
          {
            title: '雞胸肉燉米飯',
          },
          {
            title: '雞肉雞蛋餅',
          },
          {
            title: '雞肉蔬菜湯',
          },
        ],
      },
      {
        title: '魚肉料理',
        subchapters: [
          {
            title: '鮭魚煮飯',
          },
          {
            title: '鯖魚雞蛋捲',
          },
          {
            title: '魚肉蔬菜湯',
          },
        ],
      },
      {
        title: '牛肉料理',
        subchapters: [
          {
            title: '紅燒牛肉飯',
          },
          {
            title: '牛肉馬鈴薯煮飯',
          },
          {
            title: '牛肉蔬菜湯',
          },
        ],
      },
      {
        title: '素食料理',
        subchapters: [
          {
            title: '蔬菜燉米飯',
          },
          {
            title: '蔬菜雞蛋餅',
          },
          {
            title: '蔬菜湯',
          },
        ],
      },
      {
        title: '特殊料理',
        subchapters: [
          {
            title: '鴨肉紫米飯',
          },
          {
            title: '鯊魚湯',
          },
          {
            title: '蜂蜜燒雞',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪食譜'],
    title: '貓咪的美食天堂',
    chapters: [
      {
        title: '肉類食譜',
        subchapters: [
          {
            title: '香煎雞腿塊',
          },
          {
            title: '牛肉肝臟餅乾',
          },
          {
            title: '豬肉小肉丸',
          },
        ],
      },
      {
        title: '海鮮食譜',
        subchapters: [
          {
            title: '鮮蝦紫米飯',
          },
          {
            title: '魚肉雞蛋捲',
          },
          {
            title: '蟹肉蔬菜湯',
          },
        ],
      },
      {
        title: '素食食譜',
        subchapters: [
          {
            title: '蔬菜燉米飯',
          },
          {
            title: '南瓜雞蛋餅',
          },
          {
            title: '紅蘿蔔湯',
          },
        ],
      },
      {
        title: '點心食譜',
        subchapters: [
          {
            title: '鮪魚曲奇',
          },
          {
            title: '雞肉蔬菜卷',
          },
          {
            title: '乳酪雞肉球',
          },
        ],
      },
      {
        title: '特殊食譜',
        subchapters: [
          {
            title: '鴨肉南瓜飯',
          },
          {
            title: '羊肉湯',
          },
          {
            title: '燻雞胸',
          },
        ],
      },
    ],
  },
];

/** 寵物溝通 */
const petCommunications: courseHierarchyType[] = [
  {
    tag: ['寵物溝通'],
    title: '建立與你的寵物更深層的連結',
    chapters: [
      {
        title: '理解寵物行為',
        subchapters: [
          {
            title: '觀察與解讀身體語言',
          },
          {
            title: '探索情緒與情感表達',
          },
          {
            title: '認識寵物的社交行為',
          },
        ],
      },
      {
        title: '建立溝通技巧',
        subchapters: [
          {
            title: '正確使用聲音指令',
          },
          {
            title: '身體姿勢與手勢的重要性',
          },
          {
            title: '與寵物建立互動的方法',
          },
        ],
      },
      {
        title: '深化連結',
        subchapters: [
          {
            title: '共同活動與遊戲',
          },
          {
            title: '心靈感應與靈性連結',
          },
          {
            title: '寵物心理健康與照顧',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '深入寵物心靈：建立心靈連結的秘訣',
    chapters: [
      {
        title: '寵物行為與情感',
        subchapters: [
          {
            title: '解讀身體語言',
          },
          {
            title: '情感表達與需求',
          },
          {
            title: '寵物社交行為',
          },
        ],
      },
      {
        title: '溝通技巧與訓練',
        subchapters: [
          {
            title: '正確使用聲音指令',
          },
          {
            title: '肢體語言與手勢',
          },
          {
            title: '建立寵物信任與合作',
          },
        ],
      },
      {
        title: '心靈連結與互動',
        subchapters: [
          {
            title: '心靈感應與靈性連結',
          },
          {
            title: '寵物心理健康與照顧',
          },
          {
            title: '共同活動與遊戲',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '深入寵物心靈的奧秘',
    chapters: [
      {
        title: '理解寵物語言',
        subchapters: [
          {
            title: '解讀身體語言',
          },
          {
            title: '寵物情緒與表達',
          },
          {
            title: '理解寵物需要與渴望',
          },
        ],
      },
      {
        title: '建立溝通技巧',
        subchapters: [
          {
            title: '有效使用聲音指令',
          },
          {
            title: '肢體語言與觸摸技巧',
          },
          {
            title: '建立信任與互動',
          },
        ],
      },
      {
        title: '深化連結與互動',
        subchapters: [
          {
            title: '共同探險與遊戲',
          },
          {
            title: '靈性連結與心靈感應',
          },
          {
            title: '寵物心理健康與照顧',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '建立與寵物的深層連結',
    chapters: [
      {
        title: '寵物行為觀察',
        subchapters: [
          {
            title: '解讀身體語言',
          },
          {
            title: '察覺情緒變化',
          },
          {
            title: '瞭解社交需求',
          },
        ],
      },
      {
        title: '有效溝通技巧',
        subchapters: [
          {
            title: '適切使用聲音指令',
          },
          {
            title: '掌握肢體語言',
          },
          {
            title: '建立信任與互動',
          },
        ],
      },
      {
        title: '深化連結與互動',
        subchapters: [
          {
            title: '共同遊戲與探險',
          },
          {
            title: '心靈感應與靈性連結',
          },
          {
            title: '照顧寵物心理健康',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '建立與寵物的心靈連結',
    chapters: [
      {
        title: '理解寵物的語言',
        subchapters: [
          {
            title: '解讀身體語言',
          },
          {
            title: '察覺情緒變化',
          },
          {
            title: '理解社交需求',
          },
        ],
      },
      {
        title: '有效溝通技巧',
        subchapters: [
          {
            title: '使用聲音指令的重要性',
          },
          {
            title: '掌握肢體語言',
          },
          {
            title: '建立信任與互動',
          },
        ],
      },
      {
        title: '深化連結與互動',
        subchapters: [
          {
            title: '共同遊戲與探索',
          },
          {
            title: '心靈感應與靈性連結',
          },
          {
            title: '照顧寵物的心理健康',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '建立與寵物的心靈連結',
    chapters: [
      {
        title: '深入了解寵物的行為',
        subchapters: [
          {
            title: '觀察身體語言',
          },
          {
            title: '理解尾巴的訊號',
          },
          {
            title: '解讀嘴唇與耳朵的動作',
          },
        ],
      },
      {
        title: '建立信任和互動',
        subchapters: [
          {
            title: '使用正面強化訓練',
          },
          {
            title: '建立一個安全的環境',
          },
          {
            title: '適時給予獎勵和鼓勵',
          },
        ],
      },
      {
        title: '溝通的技巧與訓練',
        subchapters: [
          {
            title: '使用語言指令與手勢',
          },
          {
            title: '建立一套獨特的暗號',
          },
          {
            title: '運用肢體動作進行互動',
          },
        ],
      },
      {
        title: '心靈連結的深化',
        subchapters: [
          {
            title: '共享特別時刻',
          },
          {
            title: '寵物按摩與身體接觸',
          },
          {
            title: '維持良好的溝通與互動',
          },
        ],
      },
      {
        title: '進階溝通技巧',
        subchapters: [
          {
            title: '瞭解寵物的個性特質',
          },
          {
            title: '調整溝通方式與頻率',
          },
          {
            title: '與寵物建立共同的活動與興趣',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '建立與寵物的心靈連結',
    chapters: [
      {
        title: '理解寵物的情緒',
        subchapters: [
          {
            title: '觀察身體語言',
          },
          {
            title: '辨識表情和聲音',
          },
          {
            title: '與寵物建立共鳴',
          },
        ],
      },
      {
        title: '建立信任和互動',
        subchapters: [
          {
            title: '使用正向訓練方法',
          },
          {
            title: '建立安全的環境',
          },
          {
            title: '建立寵物與主人間的連結',
          },
        ],
      },
      {
        title: '溝通技巧與訓練',
        subchapters: [
          {
            title: '使用語言指令與手勢',
          },
          {
            title: '建立獨特的暗號',
          },
          {
            title: '進行日常溝通訓練',
          },
        ],
      },
      {
        title: '心靈連結的深化',
        subchapters: [
          {
            title: '共享特別時刻',
          },
          {
            title: '進行寵物按摩與身體接觸',
          },
          {
            title: '維持良好的溝通與互動',
          },
        ],
      },
      {
        title: '適應個別寵物的需求',
        subchapters: [
          {
            title: '了解寵物的個性特質',
          },
          {
            title: '調整溝通方式與頻率',
          },
          {
            title: '滿足寵物的身體與心理需求',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '深入瞭解寵物的語言與行為',
    chapters: [
      {
        title: '觀察寵物的身體語言',
        subchapters: [
          {
            title: '姿勢與動作的解讀',
          },
          {
            title: '尾巴和耳朵的訊號',
          },
          {
            title: '眼神和面部表情的意義',
          },
        ],
      },
      {
        title: '聆聽寵物的聲音',
        subchapters: [
          {
            title: '吠叫和咆哮的分辨',
          },
          {
            title: '呼嚕和嘶嘶聲的意思',
          },
          {
            title: '尖叫和嗚咽的情緒表達',
          },
        ],
      },
      {
        title: '理解寵物的日常行為',
        subchapters: [
          {
            title: '如何解讀飲食和排泄行為',
          },
          {
            title: '探索與遊戲的目的和行為',
          },
          {
            title: '與其他寵物和人的互動行為',
          },
        ],
      },
      {
        title: '建立與寵物的互動連結',
        subchapters: [
          {
            title: '使用正面的訓練方法',
          },
          {
            title: '提供愛與關懷的肢體接觸',
          },
          {
            title: '建立專屬於你和寵物的暗號',
          },
        ],
      },
      {
        title: '進一步深化寵物溝通',
        subchapters: [
          {
            title: '寵物心理學的基礎原理',
          },
          {
            title: '進行寵物訓練和調教',
          },
          {
            title: '尊重寵物的個體差異與需求',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '建立與寵物的良好溝通',
    chapters: [
      {
        title: '觀察寵物的身體語言',
        subchapters: [
          {
            title: '姿勢與動作的解讀',
          },
          {
            title: '尾巴和耳朵的訊號',
          },
          {
            title: '眼神和面部表情的意義',
          },
        ],
      },
      {
        title: '聆聽寵物的聲音',
        subchapters: [
          {
            title: '吠叫和咆哮的分辨',
          },
          {
            title: '呼嚕和嘶嘶聲的意思',
          },
          {
            title: '尖叫和嗚咽的情緒表達',
          },
        ],
      },
      {
        title: '理解寵物的需求',
        subchapters: [
          {
            title: '飲食與排泄的訊號',
          },
          {
            title: '運動與休息的平衡',
          },
          {
            title: '安全與保護的需求',
          },
        ],
      },
      {
        title: '建立互動與信任',
        subchapters: [
          {
            title: '正面訓練方法的應用',
          },
          {
            title: '互動遊戲的建立',
          },
          {
            title: '與寵物建立特殊連結',
          },
        ],
      },
      {
        title: '溝通障礙與解決',
        subchapters: [
          {
            title: '行為問題的解讀',
          },
          {
            title: '有效解決溝通問題',
          },
          {
            title: '專業支援與協助',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物溝通'],
    title: '深入了解寵物溝通技巧',
    chapters: [
      {
        title: '觀察寵物的身體語言',
        subchapters: [
          {
            title: '解讀姿勢和動作',
          },
          {
            title: '掌握尾巴和耳朵的訊號',
          },
          {
            title: '理解眼神和面部表情',
          },
        ],
      },
      {
        title: '聆聽寵物的聲音',
        subchapters: [
          {
            title: '辨識不同的叫聲',
          },
          {
            title: '理解喉音和嘶嘶聲',
          },
          {
            title: '探索其他聲音的意義',
          },
        ],
      },
      {
        title: '建立與寵物的情感連結',
        subchapters: [
          {
            title: '使用身體語言回應寵物',
          },
          {
            title: '培養共享時刻和互動',
          },
          {
            title: '透過遊戲增進溝通',
          },
        ],
      },
      {
        title: '調適溝通方式',
        subchapters: [
          {
            title: '瞭解寵物的個別需求',
          },
          {
            title: '適應不同狀態和環境',
          },
          {
            title: '建立一致的指令與信號',
          },
        ],
      },
      {
        title: '解決溝通障礙',
        subchapters: [
          {
            title: '處理寵物的焦慮和恐懼',
          },
          {
            title: '應對行為問題的策略',
          },
          {
            title: '尋求專業的溝通支援',
          },
        ],
      },
    ],
  },
];

/** 寵物洗澡教學 */
const petBaths: courseHierarchyType[] = [
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡技巧與注意事項',
    chapters: [
      {
        title: '準備工作',
        subchapters: [
          {
            title: '選擇洗澡地點',
          },
          {
            title: '收集必要用品',
          },
          {
            title: '安全措施',
          },
        ],
      },
      {
        title: '洗澡步驟',
        subchapters: [
          {
            title: '預洗與梳毛',
          },
          {
            title: '水溫與洗髮產品',
          },
          {
            title: '肢體語言與觸摸技巧',
          },
        ],
      },
      {
        title: '特殊寵物洗澡',
        subchapters: [
          {
            title: '貓咪洗澡技巧',
          },
          {
            title: '大型犬洗澡方法',
          },
          {
            title: '老年寵物洗澡注意事項',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡大全',
    chapters: [
      {
        title: '洗澡前的準備',
        subchapters: [
          {
            title: '選擇洗澡地點',
          },
          {
            title: '溫度與環境調節',
          },
          {
            title: '預先梳理寵物毛髮',
          },
        ],
      },
      {
        title: '洗澡步驟與技巧',
        subchapters: [
          {
            title: '如何正確使用洗澡產品',
          },
          {
            title: '注意安全與保持鎮定',
          },
          {
            title: '洗澡後的護理與乾燥',
          },
        ],
      },
      {
        title: '特殊寵物洗澡指南',
        subchapters: [
          {
            title: '小型犬洗澡技巧',
          },
          {
            title: '兔子洗澡方法與頻率',
          },
          {
            title: '洗澡時適用的寵物安撫方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡完全指南',
    chapters: [
      {
        title: '準備工作',
        subchapters: [
          {
            title: '選擇洗澡地點',
          },
          {
            title: '確保洗澡用品齊全',
          },
          {
            title: '預先梳理寵物毛髮',
          },
        ],
      },
      {
        title: '洗澡前的注意事項',
        subchapters: [
          {
            title: '溫度調節與安全性',
          },
          {
            title: '耳朵與眼睛保護',
          },
          {
            title: '考慮寵物洗澡頻率',
          },
        ],
      },
      {
        title: '洗澡步驟與技巧',
        subchapters: [
          {
            title: '適合的洗澡水溫',
          },
          {
            title: '使用適當的洗澡產品',
          },
          {
            title: '按摩與清潔技巧',
          },
        ],
      },
      {
        title: '洗澡後的護理',
        subchapters: [
          {
            title: '寵物毛髮乾燥方法',
          },
          {
            title: '耳朵清潔與檢查',
          },
          {
            title: '指甲修剪與保持',
          },
        ],
      },
      {
        title: '特殊寵物洗澡指南',
        subchapters: [
          {
            title: '貓咪洗澡技巧',
          },
          {
            title: '老年寵物洗澡注意事項',
          },
          {
            title: '敏感皮膚寵物的洗澡方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡技巧與注意事項',
    chapters: [
      {
        title: '洗澡前的準備',
        subchapters: [
          {
            title: '確保適當的環境和設備',
          },
          {
            title: '準備適合的洗澡產品',
          },
          {
            title: '確保寵物舒適的心理狀態',
          },
        ],
      },
      {
        title: '洗澡的步驟與技巧',
        subchapters: [
          {
            title: '適當的水溫和水流控制',
          },
          {
            title: '使用適合的洗澡動作和手法',
          },
          {
            title: '注意寵物耳部、眼部和口腔的清潔',
          },
        ],
      },
      {
        title: '選擇適合的洗澡頻率',
        subchapters: [
          {
            title: '考慮寵物品種和毛髮特性',
          },
          {
            title: '根據活動水平和環境調整洗澡頻率',
          },
          {
            title: '特殊情況下的洗澡需求',
          },
        ],
      },
      {
        title: '特殊寵物洗澡需求',
        subchapters: [
          {
            title: '老年寵物和幼犬/幼貓的洗澡技巧',
          },
          {
            title: '長毛寵物和皮膚敏感寵物的洗澡注意事項',
          },
          {
            title: '帶傷或恢復期寵物的洗澡指導',
          },
        ],
      },
      {
        title: '洗澡後的護理與保養',
        subchapters: [
          {
            title: '毛髮的乾燥與梳理',
          },
          {
            title: '足部和爪子的保養',
          },
          {
            title: '耳部和眼部的清潔與檢查',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡技巧與注意事項',
    chapters: [
      {
        title: '選擇適當的洗澡場所',
        subchapters: [
          {
            title: '提供安全和舒適的洗澡空間',
          },
          {
            title: '準備洗澡所需的工具和用品',
          },
          {
            title: '確保場所的衛生和乾淨',
          },
        ],
      },
      {
        title: '洗澡前的準備工作',
        subchapters: [
          {
            title: '檢查寵物的皮膚和毛髮狀況',
          },
          {
            title: '確定洗澡水溫和洗澡產品的選擇',
          },
          {
            title: '讓寵物熟悉洗澡過程',
          },
        ],
      },
      {
        title: '洗澡的步驟和技巧',
        subchapters: [
          {
            title: '適量使用洗澡產品並避開敏感部位',
          },
          {
            title: '按摩和清洗寵物的身體',
          },
          {
            title: '注意洗澡後的沖洗和乾燥',
          },
        ],
      },
      {
        title: '特殊寵物洗澡需求',
        subchapters: [
          {
            title: '對於年幼或老年寵物的洗澡照顧',
          },
          {
            title: '處理長毛寵物的洗澡困難',
          },
          {
            title: '應對敏感肌膚寵物的洗澡挑戰',
          },
        ],
      },
      {
        title: '洗澡後的護理和注意事項',
        subchapters: [
          {
            title: '梳理和整理寵物的毛髮',
          },
          {
            title: '清潔寵物的耳朵和眼睛',
          },
          {
            title: '保持洗澡後的寵物舒適和安靜',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡的基本知識與技巧',
    chapters: [
      {
        title: '適當的洗澡頻率',
        subchapters: [
          {
            title: '了解寵物洗澡的頻率建議',
          },
          {
            title: '考慮寵物的品種和毛髮特性',
          },
          {
            title: '適應個別寵物的洗澡需求',
          },
        ],
      },
      {
        title: '洗澡前的準備',
        subchapters: [
          {
            title: '選擇適合的洗澡場所',
          },
          {
            title: '準備必要的洗澡用具和產品',
          },
          {
            title: '確保洗澡水溫和水流的安全性',
          },
        ],
      },
      {
        title: '洗澡的步驟與技巧',
        subchapters: [
          {
            title: '準備寵物的身體和毛髮',
          },
          {
            title: '使用適當的洗澡動作和手法',
          },
          {
            title: '注意耳部和眼部的清潔',
          },
        ],
      },
      {
        title: '洗澡後的護理與保養',
        subchapters: [
          {
            title: '使用適合的毛巾和吹風機',
          },
          {
            title: '梳理寵物的毛髮和皮膚',
          },
          {
            title: '定期檢查寵物的皮膚狀況',
          },
        ],
      },
      {
        title: '特殊情況下的洗澡注意事項',
        subchapters: [
          {
            title: '幼年寵物和老年寵物的洗澡需求',
          },
          {
            title: '特定疾病或皮膚問題的洗澡指引',
          },
          {
            title: '針對長毛寵物的特殊洗澡技巧',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡的基本知識與技巧',
    chapters: [
      {
        title: '適當的洗澡頻率',
        subchapters: [
          {
            title: '了解寵物洗澡的頻率建議',
          },
          {
            title: '考慮寵物的品種和毛髮特性',
          },
          {
            title: '適應個別寵物的洗澡需求',
          },
        ],
      },
      {
        title: '洗澡前的準備',
        subchapters: [
          {
            title: '選擇適合的洗澡場所',
          },
          {
            title: '準備必要的洗澡用具和產品',
          },
          {
            title: '確保洗澡水溫和水流的安全性',
          },
        ],
      },
      {
        title: '洗澡的步驟與技巧',
        subchapters: [
          {
            title: '準備寵物的身體和毛髮',
          },
          {
            title: '使用適當的洗澡動作和手法',
          },
          {
            title: '注意耳部和眼部的清潔',
          },
        ],
      },
      {
        title: '洗澡後的護理與保養',
        subchapters: [
          {
            title: '使用適合的毛巾和吹風機',
          },
          {
            title: '梳理寵物的毛髮和皮膚',
          },
          {
            title: '定期檢查寵物的皮膚狀況',
          },
        ],
      },
      {
        title: '特殊情況下的洗澡注意事項',
        subchapters: [
          {
            title: '幼年寵物和老年寵物的洗澡需求',
          },
          {
            title: '特定疾病或皮膚問題的洗澡指引',
          },
          {
            title: '針對長毛寵物的特殊洗澡技巧',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡的基本步驟與技巧',
    chapters: [
      {
        title: '準備洗澡場所',
        subchapters: [
          {
            title: '選擇適合的洗澡盆或淋浴間',
          },
          {
            title: '確保洗澡場所的安全與舒適',
          },
          {
            title: '預防寵物滑倒的措施',
          },
        ],
      },
      {
        title: '選擇洗澡產品',
        subchapters: [
          {
            title: '選擇適合寵物皮膚和毛髮的洗澡產品',
          },
          {
            title: '了解洗澡產品的成分和效用',
          },
          {
            title: '避免使用對寵物有害的產品',
          },
        ],
      },
      {
        title: '洗澡前的準備工作',
        subchapters: [
          {
            title: '梳理寵物的毛髮和除去結塊',
          },
          {
            title: '檢查寵物的耳朵和指甲',
          },
          {
            title: '確保洗澡水溫和水壓的適宜',
          },
        ],
      },
      {
        title: '洗澡的步驟和技巧',
        subchapters: [
          {
            title: '濕潤寵物的毛髮和身體',
          },
          {
            title: '適量使用洗澡產品並輕柔按摩',
          },
          {
            title: '避免讓水或洗澡產品進入寵物的耳朵和眼睛',
          },
        ],
      },
      {
        title: '洗澡後的護理和保養',
        subchapters: [
          {
            title: '仔細沖洗並確保去除所有洗澡產品',
          },
          {
            title: '用毛巾輕輕擦乾寵物的毛髮和身體',
          },
          {
            title: '定期檢查寵物的皮膚和',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡技巧與注意事項',
    chapters: [
      {
        title: '洗澡前的準備',
        subchapters: [
          {
            title: '確保洗澡場所安全舒適',
          },
          {
            title: '選擇適合的洗澡用品和工具',
          },
          {
            title: '預防寵物滑倒和意外發生',
          },
        ],
      },
      {
        title: '洗澡步驟與技巧',
        subchapters: [
          {
            title: '適當濕潤寵物的毛髮和身體',
          },
          {
            title: '使用適量且適合的洗澡產品',
          },
          {
            title: '注意適當的洗澡動作和手法',
          },
        ],
      },
      {
        title: '特殊情況下的洗澡注意事項',
        subchapters: [
          {
            title: '老年寵物的洗澡需求與安全',
          },
          {
            title: '幼年寵物的洗澡指南',
          },
          {
            title: '特定品種寵物的洗澡技巧',
          },
        ],
      },
      {
        title: '洗澡後的護理與保養',
        subchapters: [
          {
            title: '仔細沖洗並去除所有洗澡產品',
          },
          {
            title: '溫和擦乾寵物的毛髮和皮膚',
          },
          {
            title: '定期檢查寵物的皮膚狀況',
          },
        ],
      },
      {
        title: '注意事項與常見問題解答',
        subchapters: [
          {
            title: '洗澡的頻率和最佳時機',
          },
          {
            title: '如何應對寵物洗澡中的挑戰',
          },
          {
            title: '常見洗澡問題的解決方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物洗澡教學'],
    title: '寵物洗澡的安全與舒適',
    chapters: [
      {
        title: '洗澡場所的準備',
        subchapters: [
          {
            title: '確保洗澡場所的安全性',
          },
          {
            title: '選擇合適的洗澡用具',
          },
          {
            title: '營造舒適的洗澡環境',
          },
        ],
      },
      {
        title: '洗澡前的準備工作',
        subchapters: [
          {
            title: '預熱洗澡水溫度',
          },
          {
            title: '確保寵物放鬆和安靜',
          },
          {
            title: '保護寵物的耳朵和眼睛',
          },
        ],
      },
      {
        title: '洗澡的步驟和技巧',
        subchapters: [
          {
            title: '適當的濕潤寵物身體',
          },
          {
            title: '使用適合的洗澡產品',
          },
          {
            title: '輕柔按摩和清潔寵物',
          },
        ],
      },
      {
        title: '安全注意事項',
        subchapters: [
          {
            title: '適當控制洗澡水溫',
          },
          {
            title: '避免將水或洗澡產品進入寵物的耳朵和眼睛',
          },
          {
            title: '預防滑倒和意外傷害',
          },
        ],
      },
      {
        title: '洗澡後的護理與保養',
        subchapters: [
          {
            title: '輕輕擦乾寵物的毛髮和皮膚',
          },
          {
            title: '適時梳理和除去結塊',
          },
          {
            title: '注意皮膚和毛髮的健康狀況',
          },
        ],
      },
    ],
  },
];

/** 寵物旅宿訓練 */
const petHotelTrainings: courseHierarchyType[] = [
  {
    tag: ['寵物旅宿訓練'],
    title: '全方位寵物旅宿訓練攻略',
    chapters: [
      {
        title: '寵物旅宿訓練概述',
        subchapters: [
          {
            title: '為何需要寵物旅宿訓練？',
          },
          {
            title: '選擇適合的寵物旅宿訓練場所',
          },
          {
            title: '準備寵物旅宿訓練前的必要步驟',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立堅實的寵物旅宿訓練基礎',
          },
          {
            title: '教授寵物旅宿訓練的基本指令',
          },
          {
            title: '解決寵物旅宿訓練中的常見問題',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '提升寵物旅宿訓練的難度與挑戰',
          },
          {
            title: '應對寵物旅宿訓練中的困難情況',
          },
          {
            title: '制定個性化的寵物旅宿訓練計劃',
          },
        ],
      },
      {
        title: '社交化與群體訓練',
        subchapters: [
          {
            title: '培養寵物的社交能力',
          },
          {
            title: '處理寵物間的相處衝突',
          },
          {
            title: '寵物旅宿訓練中的群體活動',
          },
        ],
      },
      {
        title: '特殊情境下的旅宿訓練',
        subchapters: [
          {
            title: '處理寵物的焦慮與分離焦慮問題',
          },
          {
            title: '旅宿訓練中的醫療與照護需求',
          },
          {
            title: '寵物旅宿訓練後的回家過渡',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練大師班',
    chapters: [
      {
        title: '旅宿訓練概述',
        subchapters: [
          {
            title: '了解寵物旅宿訓練的重要性',
          },
          {
            title: '選擇合適的寵物旅宿訓練場所',
          },
          {
            title: '準備寵物旅宿訓練前的基本知識',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立寵物的旅宿訓練基石',
          },
          {
            title: '寵物旅宿訓練的基本指令',
          },
          {
            title: '解決寵物旅宿訓練中的常見問題',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '提高寵物旅宿訓練的難度',
          },
          {
            title: '應對寵物旅宿訓練中的挑戰',
          },
          {
            title: '進行旅宿訓練的時間管理',
          },
        ],
      },
      {
        title: '寵物旅宿與社交化',
        subchapters: [
          {
            title: '培養寵物的社交能力',
          },
          {
            title: '處理寵物間的相處問題',
          },
          {
            title: '寵物旅宿中的群體訓練方法',
          },
        ],
      },
      {
        title: '特殊情境下的旅宿訓練',
        subchapters: [
          {
            title: '處理寵物的焦慮與分離焦慮',
          },
          {
            title: '旅宿訓練中的醫療照護需求',
          },
          {
            title: '寵物旅宿訓練後的回家過渡',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '高效寵物旅宿訓練指南',
    chapters: [
      {
        title: '旅宿訓練的基礎知識',
        subchapters: [
          {
            title: '選擇適合的寵物旅宿訓練場所',
          },
          {
            title: '了解旅宿訓練的目的與好處',
          },
          {
            title: '準備寵物旅宿訓練的必要條件',
          },
        ],
      },
      {
        title: '基本訓練技巧',
        subchapters: [
          {
            title: '建立寵物的旅宿訓練基礎',
          },
          {
            title: '教授寵物旅宿訓練的基本指令',
          },
          {
            title: '解決寵物旅宿訓練中的常見問題',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '增加旅宿訓練的難度與挑戰',
          },
          {
            title: '應對寵物旅宿訓練中的困難情況',
          },
          {
            title: '設定寵物旅宿訓練的進度與目標',
          },
        ],
      },
      {
        title: '寵物社交化與旅宿訓練',
        subchapters: [
          {
            title: '培養寵物的社交能力',
          },
          {
            title: '處理寵物間的相處問題',
          },
          {
            title: '寵物旅宿訓練中的群體活動',
          },
        ],
      },
      {
        title: '特殊情況下的旅宿訓練',
        subchapters: [
          {
            title: '處理寵物的焦慮與分離焦慮',
          },
          {
            title: '旅宿訓練中的醫療照護需求',
          },
          {
            title: '寵物旅宿訓練後的回家過渡',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '全方位寵物旅宿訓練攻略',
    chapters: [
      {
        title: '寵物旅宿訓練概述',
        subchapters: [
          {
            title: '為何需要寵物旅宿訓練？',
          },
          {
            title: '選擇適合的寵物旅宿訓練場所',
          },
          {
            title: '準備寵物旅宿訓練前的必要步驟',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立堅實的寵物旅宿訓練基礎',
          },
          {
            title: '教授寵物旅宿訓練的基本指令',
          },
          {
            title: '解決寵物旅宿訓練中的常見問題',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '提升寵物旅宿訓練的難度與挑戰',
          },
          {
            title: '應對寵物旅宿訓練中的困難情況',
          },
          {
            title: '制定個性化的寵物旅宿訓練計劃',
          },
        ],
      },
      {
        title: '社交化與群體訓練',
        subchapters: [
          {
            title: '培養寵物的社交能力',
          },
          {
            title: '處理寵物間的相處衝突',
          },
          {
            title: '寵物旅宿訓練中的群體活動',
          },
        ],
      },
      {
        title: '特殊情境下的旅宿訓練',
        subchapters: [
          {
            title: '處理寵物的焦慮與分離焦慮問題',
          },
          {
            title: '旅宿訓練中的醫療與照護需求',
          },
          {
            title: '寵物旅宿訓練後的回家過渡',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練的指南',
    chapters: [
      {
        title: '選擇合適的寵物旅宿訓練場所',
        subchapters: [
          {
            title: '考慮訓練場所的設施和環境',
          },
          {
            title: '評估訓練師的專業資格',
          },
          {
            title: '了解寵物旅宿訓練的課程和方法',
          },
        ],
      },
      {
        title: '訓練前的準備工作',
        subchapters: [
          {
            title: '確保寵物的基本福利需求',
          },
          {
            title: '熟悉寵物的行為和需求',
          },
          {
            title: '準備必要的文件和健康記錄',
          },
        ],
      },
      {
        title: '寵物旅宿訓練的基礎技巧',
        subchapters: [
          {
            title: '基本的聽指令和行為控制',
          },
          {
            title: '社交化和人際互動訓練',
          },
          {
            title: '戶外活動和遊戲訓練',
          },
        ],
      },
      {
        title: '處理特殊行為問題',
        subchapters: [
          {
            title: '解決焦慮和恐懼問題',
          },
          {
            title: '處理攻擊性行為和咬人問題',
          },
          {
            title: '訓練對於其他動物的友好行為',
          },
        ],
      },
      {
        title: '寵物旅宿訓練後的持續支持',
        subchapters: [
          {
            title: '家庭環境中的訓練延續',
          },
          {
            title: '定期回顧和進階訓練課程',
          },
          {
            title: '提供適當的照顧和環境',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練的要點',
    chapters: [
      {
        title: '選擇適合的寵物旅宿訓練場所',
        subchapters: [
          {
            title: '評估訓練場所的設施和安全性',
          },
          {
            title: '確認訓練師的資格和經驗',
          },
          {
            title: '瞭解訓練課程的內容和方法',
          },
        ],
      },
      {
        title: '訓練前的準備工作',
        subchapters: [
          {
            title: '確保寵物的健康狀態和預防接種',
          },
          {
            title: '準備寵物的必要文件和健康紀錄',
          },
          {
            title: '熟悉寵物的日常行為和需求',
          },
        ],
      },
      {
        title: '寵物旅宿訓練的基本技巧',
        subchapters: [
          {
            title: '建立基礎的聽命和指令回應',
          },
          {
            title: '社交化和人際互動的訓練',
          },
          {
            title: '寵物在旅宿環境中的禮儀和行為',
          },
        ],
      },
      {
        title: '解決特殊行為問題',
        subchapters: [
          {
            title: '處理寵物的焦慮和恐懼問題',
          },
          {
            title: '應對攻擊性行為和咬人問題',
          },
          {
            title: '訓練對於其他動物的友善行為',
          },
        ],
      },
      {
        title: '訓練後的持續支持',
        subchapters: [
          {
            title: '家庭環境中的訓練延續和應用',
          },
          {
            title: '定期回顧和進階訓練課程',
          },
          {
            title: '提供寵物適當的照顧和環',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練指南',
    chapters: [
      {
        title: '選擇適合的寵物旅宿訓練場所',
        subchapters: [
          {
            title: '評估訓練場所的設施和環境',
          },
          {
            title: '了解訓練師的專業背景和經驗',
          },
          {
            title: '確認訓練課程的內容和目標',
          },
        ],
      },
      {
        title: '寵物旅宿訓練前的準備',
        subchapters: [
          {
            title: '確保寵物的健康狀態和疫苗接種',
          },
          {
            title: '準備寵物的必要文件和健康紀錄',
          },
          {
            title: '建立寵物的基本行為和服從指令',
          },
        ],
      },
      {
        title: '寵物旅宿訓練的基礎技巧',
        subchapters: [
          {
            title: '建立寵物的社交化能力',
          },
          {
            title: '培養寵物的基本禮儀和行為',
          },
          {
            title: '教導寵物在旅宿環境中的規範',
          },
        ],
      },
      {
        title: '解決特殊行為問題',
        subchapters: [
          {
            title: '處理寵物的焦慮和恐懼症狀',
          },
          {
            title: '應對寵物的攻擊性行為和咬人問題',
          },
          {
            title: '訓練寵物對其他動物的友善與合作',
          },
        ],
      },
      {
        title: '持續支持和照顧寵物',
        subchapters: [
          {
            title: '提供家庭環境中的訓練延續',
          },
          {
            title: '定期回顧和進階訓練課程',
          },
          {
            title: '確保寵物',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練實務指南',
    chapters: [
      {
        title: '選擇適合的寵物旅宿訓練場所',
        subchapters: [
          {
            title: '評估訓練場所的設施和安全性',
          },
          {
            title: '了解訓練師的專業資歷和方法',
          },
          {
            title: '選擇符合寵物需求的訓練課程',
          },
        ],
      },
      {
        title: '訓練前的準備工作',
        subchapters: [
          {
            title: '確保寵物的健康狀態和疫苗接種',
          },
          {
            title: '準備寵物的相關文件和物品',
          },
          {
            title: '建立寵物的基本服從指令',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '教導寵物基本禮儀和行為',
          },
          {
            title: '培養寵物的社交能力',
          },
          {
            title: '訓練寵物在旅宿環境中的適應能力',
          },
        ],
      },
      {
        title: '解決行為問題',
        subchapters: [
          {
            title: '處理寵物的焦慮和恐懼問題',
          },
          {
            title: '應對寵物的攻擊性行為和破壞行為',
          },
          {
            title: '訓練寵物對其他動物的友善與合作',
          },
        ],
      },
      {
        title: '訓練後的持續支持',
        subchapters: [
          {
            title: '在家環境中延續訓練成果',
          },
          {
            title: '定期回顧和進階訓練課程',
          },
          {
            title: '提供寵物旅宿期間的適當照顧',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練指南',
    chapters: [
      {
        title: '選擇合適的寵物旅宿訓練場所',
        subchapters: [
          {
            title: '評估訓練場所的設施和環境',
          },
          {
            title: '確認訓練師的專業背景和經驗',
          },
          {
            title: '了解訓練課程的內容和目標',
          },
        ],
      },
      {
        title: '準備寵物旅宿訓練前的工作',
        subchapters: [
          {
            title: '確保寵物的健康狀態和接種疫苗',
          },
          {
            title: '準備寵物的相關文件和物品',
          },
          {
            title: '建立寵物的基本服從指令',
          },
        ],
      },
      {
        title: '寵物旅宿訓練的基礎技巧',
        subchapters: [
          {
            title: '培養寵物的社交化能力',
          },
          {
            title: '訓練寵物的基本行為和禮儀',
          },
          {
            title: '教導寵物在旅宿環境中的規範',
          },
        ],
      },
      {
        title: '解決寵物旅宿訓練中的問題',
        subchapters: [
          {
            title: '處理寵物的焦慮和恐懼症狀',
          },
          {
            title: '應對寵物的攻擊性行為和咬人問題',
          },
          {
            title: '訓練寵物對其他動物的友善與合作',
          },
        ],
      },
      {
        title: '持續支持和照顧寵物',
        subchapters: [
          {
            title: '提供家庭環境中的訓練延續',
          },
          {
            title: '定期回顧和進階訓練課程',
          },
          {
            title: '確保確保寵物在旅宿期間得到適當的照顧和關注',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物旅宿訓練'],
    title: '寵物旅宿訓練指南',
    chapters: [
      {
        title: '旅宿前的準備',
        subchapters: [
          {
            title: '選擇適合的寵物旅宿場所',
          },
          {
            title: '了解旅宿場所的規定和要求',
          },
          {
            title: '預訂旅宿並安排寵物送養',
          },
        ],
      },
      {
        title: '旅宿期間的溝通',
        subchapters: [
          {
            title: '提供寵物詳細的健康資訊',
          },
          {
            title: '告知寵物的日常習慣和喜好',
          },
          {
            title: '提供緊急聯絡人和獸醫資訊',
          },
        ],
      },
      {
        title: '旅宿期間的餵食管理',
        subchapters: [
          {
            title: '提供寵物熟悉的食物和飲水',
          },
          {
            title: '告知旅宿場所寵物的飲食習慣',
          },
          {
            title: '注意寵物的特殊飲食需求',
          },
        ],
      },
      {
        title: '旅宿期間的運動和娛樂',
        subchapters: [
          {
            title: '確保寵物有足夠的運動空間',
          },
          {
            title: '提供寵物適合的玩具和娛樂活動',
          },
          {
            title: '安排寵物社交和互動時間',
          },
        ],
      },
      {
        title: '旅宿結束後的回歸',
        subchapters: [
          {
            title: '檢查寵物的健康狀況',
          },
          {
            title: '逐步恢復寵物的日常生活',
          },
          {
            title: '感謝旅宿場所的照顧',
          },
        ],
      },
    ],
  },
];

/** 貓咪行為訓練 */
const catBehaviorTrainings: courseHierarchyType[] = [
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '貓咪行為訓練概述',
        subchapters: [
          {
            title: '為何需要貓咪行為訓練？',
          },
          {
            title: '了解貓咪行為的基礎知識',
          },
          {
            title: '訓練前的準備與環境建立',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立貓咪的基本訓練基礎',
          },
          {
            title: '教導貓咪基本指令',
          },
          {
            title: '解決貓咪行為訓練中的常見問題',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '提升貓咪行為訓練的難度與挑戰',
          },
          {
            title: '訓練貓咪的高級指令',
          },
          {
            title: '培養貓咪的智力與遊戲訓練',
          },
        ],
      },
      {
        title: '行為問題解決',
        subchapters: [
          {
            title: '處理貓咪的壓力與焦慮行為',
          },
          {
            title: '解決貓咪的攻擊與噴射尿液問題',
          },
          {
            title: '處理貓咪的攀爬與破壞行為',
          },
        ],
      },
      {
        title: '貓咪與人類相處訓練',
        subchapters: [
          {
            title: '建立良好的貓咪人類互動關係',
          },
          {
            title: '教導貓咪尊重人類的界限',
          },
          {
            title: '訓練貓咪的社交技巧',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '貓咪行為訓練的重要性',
        subchapters: [
          {
            title: '了解貓咪行為訓練的目的',
          },
          {
            title: '選擇適合的訓練方法',
          },
          {
            title: '建立正確的訓練環境',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立貓咪的基本訓練基礎',
          },
          {
            title: '教授貓咪基本指令',
          },
          {
            title: '應對貓咪訓練中的挑戰',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '培養貓咪的智力與遊戲訓練',
          },
          {
            title: '訓練貓咪的高級指令',
          },
          {
            title: '提高貓咪訓練的難度與挑戰',
          },
        ],
      },
      {
        title: '解決行為問題',
        subchapters: [
          {
            title: '處理貓咪的壓力與焦慮行為',
          },
          {
            title: '解決貓咪的攻擊行為',
          },
          {
            title: '應對貓咪的拖地尿液問題',
          },
        ],
      },
      {
        title: '與貓咪共處訓練',
        subchapters: [
          {
            title: '建立親密的貓咪與人類關係',
          },
          {
            title: '培養貓咪的社交技巧',
          },
          {
            title: '教導貓咪適當的遊戲行為',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '了解貓咪行為訓練',
        subchapters: [
          {
            title: '為何需要貓咪行為訓練？',
          },
          {
            title: '掌握貓咪的行為特點',
          },
          {
            title: '訓練前的準備與環境建立',
          },
        ],
      },
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '建立貓咪的基本訓練基礎',
          },
          {
            title: '教導貓咪基本指令',
          },
          {
            title: '解決貓咪訓練中的困難與挑戰',
          },
        ],
      },
      {
        title: '進階訓練技巧',
        subchapters: [
          {
            title: '提升貓咪訓練的難度與挑戰',
          },
          {
            title: '培養貓咪的智力與遊戲訓練',
          },
          {
            title: '訓練貓咪的高級指令',
          },
        ],
      },
      {
        title: '解決行為問題',
        subchapters: [
          {
            title: '處理貓咪的攻擊行為',
          },
          {
            title: '解決貓咪的尿液問題',
          },
          {
            title: '應對貓咪的挑剔與焦慮',
          },
        ],
      },
      {
        title: '與貓咪共處訓練',
        subchapters: [
          {
            title: '建立親密的貓咪人類關係',
          },
          {
            title: '教導貓咪適當的社交行為',
          },
          {
            title: '培養貓咪的環境適應能力',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '建立良好的行為基礎',
        subchapters: [
          {
            title: '貓咪基本指令的訓練',
          },
          {
            title: '建立規律的日常生活',
          },
          {
            title: '設立適當的行為界線',
          },
        ],
      },
      {
        title: '解決貓咪的壓力和焦慮',
        subchapters: [
          {
            title: '提供舒適和安全的環境',
          },
          {
            title: '使用適當的玩具和活動來紓解壓力',
          },
          {
            title: '引入正面的愉悅刺激',
          },
        ],
      },
      {
        title: '貓咪社交化訓練',
        subchapters: [
          {
            title: '引導貓咪與其他寵物相處',
          },
          {
            title: '讓貓咪熟悉人類接觸',
          },
          {
            title: '訓練貓咪在外界環境中表現良好',
          },
        ],
      },
      {
        title: '解決貓咪的壞習慣',
        subchapters: [
          {
            title: '防止貓咪攻擊和挑釁行為',
          },
          {
            title: '處理貓咪的尿液問題',
          },
          {
            title: '解決貓咪的搶食和咬傷行為',
          },
        ],
      },
      {
        title: '貓咪衛生訓練',
        subchapters: [
          {
            title: '訓練貓咪使用專用的衛生設施',
          },
          {
            title: '鼓勵貓咪定期接受身體檢查',
          },
          {
            title: '培養貓咪良好的毛髮護理習慣',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練手冊',
    chapters: [
      {
        title: '建立基本指令',
        subchapters: [
          {
            title: '教導貓咪坐下指令',
          },
          {
            title: '訓練貓咪握手指令',
          },
          {
            title: '引導貓咪使用貓砂盆',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '處理貓咪的攻擊行為',
          },
          {
            title: '改善貓咪的吵鬧行為',
          },
          {
            title: '解決貓咪的逃脫行為',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '使貓咪適應人類陌生人',
          },
          {
            title: '培養貓咪與其他寵物和平相處',
          },
          {
            title: '教導貓咪在公共場合禮貌行為',
          },
        ],
      },
      {
        title: '智力遊戲和訓練',
        subchapters: [
          {
            title: '挑戰貓咪的智力遊戲',
          },
          {
            title: '訓練貓咪完成障礙物競賽',
          },
          {
            title: '教導貓咪尋找隱藏的獎勵',
          },
        ],
      },
      {
        title: '解決壓力和焦慮',
        subchapters: [
          {
            title: '幫助貓咪減輕分離焦慮',
          },
          {
            title: '緩解貓咪的恐懼和壓力',
          },
          {
            title: '提供安全的避難所和撫慰方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪訓練指南',
    chapters: [
      {
        title: '基礎指令訓練',
        subchapters: [
          {
            title: '教導貓咪坐下指令',
          },
          {
            title: '訓練貓咪握手指令',
          },
          {
            title: '引導貓咪使用貓砂盆',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '處理貓咪攻擊行為',
          },
          {
            title: '改善貓咪吵鬧行為',
          },
          {
            title: '解決貓咪逃跑行為',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '使貓咪適應陌生人',
          },
          {
            title: '培養貓咪與其他寵物相處',
          },
          {
            title: '教導貓咪在公共場合表現良好',
          },
        ],
      },
      {
        title: '智力遊戲和訓練',
        subchapters: [
          {
            title: '挑戰貓咪智力遊戲',
          },
          {
            title: '訓練貓咪完成障礙競賽',
          },
          {
            title: '教導貓咪尋找隱藏的獎勵',
          },
        ],
      },
      {
        title: '解決壓力和焦慮',
        subchapters: [
          {
            title: '幫助貓咪減輕分離焦慮',
          },
          {
            title: '緩解貓咪的恐懼和壓力',
          },
          {
            title: '提供安全的避難所和舒緩方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '基礎訓練',
        subchapters: [
          {
            title: '教導貓咪握手指令',
          },
          {
            title: '訓練貓咪跳躍指令',
          },
          {
            title: '引導貓咪使用貓砂盆',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '處理貓咪攻擊行為',
          },
          {
            title: '改善貓咪噴尿行為',
          },
          {
            title: '解決貓咪吵鬧行為',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '使貓咪適應陌生人',
          },
          {
            title: '培養貓咪與其他寵物相處',
          },
          {
            title: '教導貓咪在公共場合表現良好',
          },
        ],
      },
      {
        title: '智力遊戲訓練',
        subchapters: [
          {
            title: '挑戰貓咪智力遊戲',
          },
          {
            title: '訓練貓咪完成障礙競賽',
          },
          {
            title: '教導貓咪尋找隱藏的獎勵',
          },
        ],
      },
      {
        title: '解決壓力和焦慮',
        subchapters: [
          {
            title: '幫助貓咪減輕分離焦慮',
          },
          {
            title: '緩解貓咪的恐懼和壓力',
          },
          {
            title: '提供安全的避難所和舒緩方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '基礎訓練',
        subchapters: [
          {
            title: '教導貓咪握手指令',
          },
          {
            title: '訓練貓咪跳躍指令',
          },
          {
            title: '引導貓咪使用貓砂盆',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '處理貓咪攻擊行為',
          },
          {
            title: '改善貓咪噴尿行為',
          },
          {
            title: '解決貓咪吵鬧行為',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '使貓咪適應陌生人',
          },
          {
            title: '培養貓咪與其他寵物相處',
          },
          {
            title: '教導貓咪在公共場合表現良好',
          },
        ],
      },
      {
        title: '智力遊戲訓練',
        subchapters: [
          {
            title: '挑戰貓咪智力遊戲',
          },
          {
            title: '訓練貓咪完成障礙競賽',
          },
          {
            title: '教導貓咪尋找隱藏的獎勵',
          },
        ],
      },
      {
        title: '解決壓力和焦慮',
        subchapters: [
          {
            title: '幫助貓咪減輕分離焦慮',
          },
          {
            title: '緩解貓咪的恐懼和壓力',
          },
          {
            title: '提供安全的避難所和舒緩方法',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '基礎指令訓練',
        subchapters: [
          {
            title: '教導貓咪坐下指令',
          },
          {
            title: '教導貓咪握手指令',
          },
          {
            title: '教導貓咪趴下指令',
          },
        ],
      },
      {
        title: '問題行為處理',
        subchapters: [
          {
            title: '解決貓咪噴尿問題',
          },
          {
            title: '解決貓咪攻擊問題',
          },
          {
            title: '解決貓咪吵鬧問題',
          },
        ],
      },
      {
        title: '遊戲和刺激',
        subchapters: [
          {
            title: '提供貓咪適當的遊戲和玩具',
          },
          {
            title: '訓練貓咪玩追逐遊戲',
          },
          {
            title: '訓練貓咪使用貓爪板',
          },
        ],
      },
      {
        title: '環境豐富',
        subchapters: [
          {
            title: '打造舒適的貓咪睡眠區域',
          },
          {
            title: '提供貓咪專屬的爬升空間',
          },
          {
            title: '設置貓咪的貓砂盆',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '引導貓咪與其他寵物相處',
          },
          {
            title: '教導貓咪適應人群和陌生環境',
          },
          {
            title: '訓練貓咪接受身體觸摸和檢查',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪行為訓練'],
    title: '貓咪行為訓練指南',
    chapters: [
      {
        title: '基礎指令訓練',
        subchapters: [
          {
            title: '教導貓咪來回走動指令',
          },
          {
            title: '教導貓咪跳躍指令',
          },
          {
            title: '教導貓咪靜止指令',
          },
        ],
      },
      {
        title: '問題行為處理',
        subchapters: [
          {
            title: '解決貓咪咬人問題',
          },
          {
            title: '解決貓咪挑釁問題',
          },
          {
            title: '解決貓咪攻擊物品問題',
          },
        ],
      },
      {
        title: '遊戲和刺激',
        subchapters: [
          {
            title: '提供貓咪獵捕遊戲',
          },
          {
            title: '訓練貓咪使用貓爪板',
          },
          {
            title: '訓練貓咪追逐玩具',
          },
        ],
      },
      {
        title: '環境豐富',
        subchapters: [
          {
            title: '打造舒適的貓咪休息區',
          },
          {
            title: '提供貓咪爬升樹架',
          },
          {
            title: '設置貓咪的貓砂盆',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '教導貓咪與其他寵物相處',
          },
          {
            title: '教導貓咪與陌生人互動',
          },
          {
            title: '訓練貓咪適應外出環境',
          },
        ],
      },
    ],
  },
];

/** 寵物零食手作 */
const handmadePetTreats: courseHierarchyType[] = [
  {
    tag: ['寵物零食手作'],
    title: '自製寵物零食食譜',
    chapters: [
      {
        title: '營養需求與安全注意事項',
        subchapters: [
          {
            title: '了解寵物營養需求',
          },
          {
            title: '選擇安全食材與避免有害成分',
          },
          {
            title: '食材保存和處理的基本原則',
          },
        ],
      },
      {
        title: '狗狗零食食譜',
        subchapters: [
          {
            title: '美味的肉餅球',
          },
          {
            title: '健康的蔬菜脆片',
          },
          {
            title: '營養豐富的果蔬冰棒',
          },
        ],
      },
      {
        title: '貓咪零食食譜',
        subchapters: [
          {
            title: '美味的魚肉卷',
          },
          {
            title: '健康的雞肉湯糕',
          },
          {
            title: '營養豐富的雞肉雜糧餅',
          },
        ],
      },
      {
        title: '兔兔零食食譜',
        subchapters: [
          {
            title: '可口的紅蘿蔔小球',
          },
          {
            title: '健康的草本曲奇',
          },
          {
            title: '營養豐富的蔬果串串',
          },
        ],
      },
      {
        title: '其他寵物零食食譜',
        subchapters: [
          {
            title: '美味的魚肉乾',
          },
          {
            title: '健康的鳥飼料球',
          },
          {
            title: '營養豐富的爬蟲類零食',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物美食DIY',
    chapters: [
      {
        title: '選擇安全食材',
        subchapters: [
          {
            title: '了解寵物飲食需求',
          },
          {
            title: '避免有害食材與調味料',
          },
          {
            title: '選擇新鮮健康的食材',
          },
        ],
      },
      {
        title: '狗狗美食製作',
        subchapters: [
          {
            title: '美味的肉餅骨',
          },
          {
            title: '健康的蔬菜水果卷',
          },
          {
            title: '口感豐富的雞肉零食',
          },
        ],
      },
      {
        title: '貓咪美食製作',
        subchapters: [
          {
            title: '魚肉軟餅乾',
          },
          {
            title: '天然的雞肉零食',
          },
          {
            title: '鮮美的紅蘿蔔卷',
          },
        ],
      },
      {
        title: '兔子美食製作',
        subchapters: [
          {
            title: '可口的蘋果胡蘿蔔球',
          },
          {
            title: '營養豐富的青草曲奇',
          },
          {
            title: '草本美味的野菜串',
          },
        ],
      },
      {
        title: '其他寵物美食製作',
        subchapters: [
          {
            title: '魚肉乾口味多',
          },
          {
            title: '鳥類的飼料棒',
          },
          {
            title: '適合爬蟲類的營養小食',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物美味自製',
    chapters: [
      {
        title: '選擇健康食材',
        subchapters: [
          {
            title: '了解寵物飲食需求',
          },
          {
            title: '避免有害食材與添加物',
          },
          {
            title: '選擇新鮮天然的食材',
          },
        ],
      },
      {
        title: '狗狗的美食',
        subchapters: [
          {
            title: '美味的肉餅球',
          },
          {
            title: '健康的蔬菜餅乾',
          },
          {
            title: '口感豐富的雞肉條',
          },
        ],
      },
      {
        title: '貓咪的美食',
        subchapters: [
          {
            title: '鮮美的魚肉餅',
          },
          {
            title: '健康的雞肉零食',
          },
          {
            title: '天然的蔬菜卷',
          },
        ],
      },
      {
        title: '兔子的美食',
        subchapters: [
          {
            title: '可口的蘋果胡蘿蔔球',
          },
          {
            title: '營養豐富的青草餅',
          },
          {
            title: '草本美味的野菜串',
          },
        ],
      },
      {
        title: '其他寵物的美食',
        subchapters: [
          {
            title: '魚肉乾的多種口味',
          },
          {
            title: '鳥類的飼料棒製作',
          },
          {
            title: '適合爬蟲類的營養小食',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物美味DIY',
    chapters: [
      {
        title: '選擇健康食材',
        subchapters: [
          {
            title: '了解寵物的營養需求',
          },
          {
            title: '選擇新鮮有機的食材',
          },
          {
            title: '避免使用有害的添加物',
          },
        ],
      },
      {
        title: '狗狗的美味零食',
        subchapters: [
          {
            title: '香噴噴的肉肉蛋糕',
          },
          {
            title: '營養豐富的蔬菜肉丸',
          },
          {
            title: '口感多樣的水果冰棒',
          },
        ],
      },
      {
        title: '貓咪的美味零食',
        subchapters: [
          {
            title: '新鮮魚肉塊的製作',
          },
          {
            title: '健康的雞肉零食球',
          },
          {
            title: '綠色蔬菜捲的製作',
          },
        ],
      },
      {
        title: '兔子的美味零食',
        subchapters: [
          {
            title: '可口的胡蘿蔔餅乾',
          },
          {
            title: '營養豐富的青草球',
          },
          {
            title: '草本美味的蘋果卷',
          },
        ],
      },
      {
        title: '其他寵物的美味零食',
        subchapters: [
          {
            title: '營養均衡的魚肉乾',
          },
          {
            title: '豐富維生素的水果乾',
          },
          {
            title: '可口的鳥類零食棒',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物美食DIY',
    chapters: [
      {
        title: '選擇健康食材',
        subchapters: [
          {
            title: '了解寵物的營養需求',
          },
          {
            title: '選擇新鮮有機的食材',
          },
          {
            title: '避免使用有害的添加物',
          },
        ],
      },
      {
        title: '狗狗的美味零食',
        subchapters: [
          {
            title: '香噴噴的肉肉餅乾',
          },
          {
            title: '營養豐富的蔬菜捲',
          },
          {
            title: '口感多樣的水果冰淇淋',
          },
        ],
      },
      {
        title: '貓咪的美味零食',
        subchapters: [
          {
            title: '新鮮魚肉塊的製作',
          },
          {
            title: '健康的雞肉零食球',
          },
          {
            title: '綠色蔬菜捲的製作',
          },
        ],
      },
      {
        title: '兔子的美味零食',
        subchapters: [
          {
            title: '可口的胡蘿蔔餅乾',
          },
          {
            title: '營養豐富的青草球',
          },
          {
            title: '草本美味的蘋果卷',
          },
        ],
      },
      {
        title: '其他寵物的美味零食',
        subchapters: [
          {
            title: '營養均衡的魚肉乾',
          },
          {
            title: '豐富維生素的水果乾',
          },
          {
            title: '可口的鳥類零食棒',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '自製健康寵物零食',
    chapters: [
      {
        title: '食材選擇',
        subchapters: [
          {
            title: '健康蛋白源',
          },
          {
            title: '天然蔬果',
          },
          {
            title: '營養堅果',
          },
        ],
      },
      {
        title: '烤製零食',
        subchapters: [
          {
            title: '肉條乾燥',
          },
          {
            title: '蔬果脆片',
          },
          {
            title: '穀物餅乾',
          },
        ],
      },
      {
        title: '製作鮮食',
        subchapters: [
          {
            title: '肉泥零食',
          },
          {
            title: '蔬菜湯糊',
          },
          {
            title: '水果冰棒',
          },
        ],
      },
      {
        title: '特別口味',
        subchapters: [
          {
            title: '素食選擇',
          },
          {
            title: '特殊配方',
          },
          {
            title: '低敏食材',
          },
        ],
      },
      {
        title: '保存與儲存',
        subchapters: [
          {
            title: '保存注意事項',
          },
          {
            title: '儲存方法',
          },
          {
            title: '適合使用容器',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物健康零食自製指南',
    chapters: [
      {
        title: '食材選擇',
        subchapters: [
          {
            title: '適合狗狗的食材',
          },
          {
            title: '適合貓咪的食材',
          },
          {
            title: '注意避免食用的食材',
          },
        ],
      },
      {
        title: '烤製零食',
        subchapters: [
          {
            title: '肉餅乾的製作',
          },
          {
            title: '蔬菜脆片的烘焙',
          },
          {
            title: '水果乾的製作',
          },
        ],
      },
      {
        title: '製作鮮食',
        subchapters: [
          {
            title: '鮮肉剁碎零食',
          },
          {
            title: '蔬菜湯糊的製作',
          },
          {
            title: '魚肉零食的製作',
          },
        ],
      },
      {
        title: '特別口味',
        subchapters: [
          {
            title: '無穀物零食',
          },
          {
            title: '特殊鮮食配方',
          },
          {
            title: '有機食材選擇',
          },
        ],
      },
      {
        title: '保存與儲存',
        subchapters: [
          {
            title: '適當保存的方法',
          },
          {
            title: '選擇適合的容器',
          },
          {
            title: '注意保存期限',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物健康零食自製指南',
    chapters: [
      {
        title: '食材選擇',
        subchapters: [
          {
            title: '適合狗狗的食材',
          },
          {
            title: '適合貓咪的食材',
          },
          {
            title: '注意避免食用的食材',
          },
        ],
      },
      {
        title: '烤製零食',
        subchapters: [
          {
            title: '肉餅乾的製作',
          },
          {
            title: '蔬菜脆片的烘焙',
          },
          {
            title: '水果乾的製作',
          },
        ],
      },
      {
        title: '製作鮮食',
        subchapters: [
          {
            title: '鮮肉剁碎零食',
          },
          {
            title: '蔬菜湯糊的製作',
          },
          {
            title: '魚肉零食的製作',
          },
        ],
      },
      {
        title: '特別口味',
        subchapters: [
          {
            title: '無穀物零食',
          },
          {
            title: '特殊鮮食配方',
          },
          {
            title: '有機食材選擇',
          },
        ],
      },
      {
        title: '保存與儲存',
        subchapters: [
          {
            title: '適當保存的方法',
          },
          {
            title: '選擇適合的容器',
          },
          {
            title: '注意保存期限',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '自製健康寵物零食',
    chapters: [
      {
        title: '選擇食材',
        subchapters: [
          {
            title: '安全食材選擇',
          },
          {
            title: '適合狗狗的食材',
          },
          {
            title: '適合貓咪的食材',
          },
        ],
      },
      {
        title: '烘焙零食',
        subchapters: [
          {
            title: '狗餅乾的製作',
          },
          {
            title: '貓咪曲奇的烘焙',
          },
          {
            title: '蔬菜脆片的製作',
          },
        ],
      },
      {
        title: '凍藏零食',
        subchapters: [
          {
            title: '凍肉棒的製作',
          },
          {
            title: '水果冰淇淋的製作',
          },
          {
            title: '奶酪凍球的製作',
          },
        ],
      },
      {
        title: '製作鮮食',
        subchapters: [
          {
            title: '雞肉燉飯的製作',
          },
          {
            title: '鮪魚餡餅的製作',
          },
          {
            title: '紅藜鮭魚餐的製作',
          },
        ],
      },
      {
        title: '保存與儲存',
        subchapters: [
          {
            title: '適當保存的方法',
          },
          {
            title: '選擇適合的容器',
          },
          {
            title: '注意保存期限',
          },
        ],
      },
    ],
  },
  {
    tag: ['寵物零食手作'],
    title: '寵物天然零食製作',
    chapters: [
      {
        title: '選擇食材',
        subchapters: [
          {
            title: '安全食材選擇',
          },
          {
            title: '適合狗狗的食材',
          },
          {
            title: '適合貓咪的食材',
          },
        ],
      },
      {
        title: '烘焙零食',
        subchapters: [
          {
            title: '狗餅乾的製作',
          },
          {
            title: '貓咪零食球的烘焙',
          },
          {
            title: '蔬菜脆片的製作',
          },
        ],
      },
      {
        title: '凍藏零食',
        subchapters: [
          {
            title: '凍肉條的製作',
          },
          {
            title: '水果冰棒的製作',
          },
          {
            title: '奶酪冰淇淋的製作',
          },
        ],
      },
      {
        title: '製作鮮食',
        subchapters: [
          {
            title: '雞肉飯糰的製作',
          },
          {
            title: '鮪魚餡餅的製作',
          },
          {
            title: '紅藜鮭魚飯的製作',
          },
        ],
      },
      {
        title: '保存與儲存',
        subchapters: [
          {
            title: '適當保存的方法',
          },
          {
            title: '選擇適合的容器',
          },
          {
            title: '注意保存期限',
          },
        ],
      },
    ],
  },
];

/** 狗狗飼養 */
const dogBreeding: courseHierarchyType[] = [
  {
    tag: ['狗狗飼養'],
    title: '健康狗狗的飼養指南',
    chapters: [
      {
        title: '基本飼養需求',
        subchapters: [
          {
            title: '提供適切的飲食',
          },
          {
            title: '建立舒適的居住環境',
          },
          {
            title: '定期運動和散步',
          },
        ],
      },
      {
        title: '狗狗的健康照護',
        subchapters: [
          {
            title: '定期疫苗接種',
          },
          {
            title: '常見疾病預防和處理',
          },
          {
            title: '定期洗澡和毛髮護理',
          },
        ],
      },
      {
        title: '行為訓練和社交化',
        subchapters: [
          {
            title: '基本指令訓練',
          },
          {
            title: '狗狗的社交化訓練',
          },
          {
            title: '解決常見行為問題',
          },
        ],
      },
      {
        title: '選擇合適的狗狗品種',
        subchapters: [
          {
            title: '了解不同品種的特點',
          },
          {
            title: '考慮生活空間和活動水平',
          },
          {
            title: '適合家庭成員的品種選擇',
          },
        ],
      },
      {
        title: '狗狗的心理健康',
        subchapters: [
          {
            title: '提供安全感和穩定的環境',
          },
          {
            title: '適時的遊戲和智力刺激',
          },
          {
            title: '狗狗的情感需求和相處方式',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '幸福狗狗的養成指南',
    chapters: [
      {
        title: '建立親密關係',
        subchapters: [
          {
            title: '建立互信的關係',
          },
          {
            title: '培養良好的溝通方式',
          },
          {
            title: '適時給予愛和關注',
          },
        ],
      },
      {
        title: '健康管理',
        subchapters: [
          {
            title: '提供均衡的飲食',
          },
          {
            title: '定期體檢和疫苗接種',
          },
          {
            title: '保持良好的衛生習慣',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '基本的聽命指令訓練',
          },
          {
            title: '社交化訓練和狗群互動',
          },
          {
            title: '解決問題行為',
          },
        ],
      },
      {
        title: '適合的活動與遊戲',
        subchapters: [
          {
            title: '定期運動和散步',
          },
          {
            title: '智力刺激和遊戲訓練',
          },
          {
            title: '探索新的環境和遊樂場',
          },
        ],
      },
      {
        title: '愛心家長指南',
        subchapters: [
          {
            title: '狗狗的情緒需求',
          },
          {
            title: '建立安全舒適的家庭環境',
          },
          {
            title: '定期關愛和時間陪伴',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗健康生活指南',
    chapters: [
      {
        title: '基本飼養需求',
        subchapters: [
          {
            title: '提供適當的飲食',
          },
          {
            title: '維持良好的衛生習慣',
          },
          {
            title: '提供安全舒適的居住環境',
          },
        ],
      },
      {
        title: '健康管理',
        subchapters: [
          {
            title: '定期醫療檢查和疫苗接種',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
          {
            title: '保持適當的體重和運動量',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '建立基本的聽命指令',
          },
          {
            title: '解決常見的行為問題',
          },
          {
            title: '進行適當的社交化訓練',
          },
        ],
      },
      {
        title: '狗狗的心理健康',
        subchapters: [
          {
            title: '提供適當的遊戲和智力刺激',
          },
          {
            title: '給予足夠的關愛和陪伴',
          },
          {
            title: '瞭解狗狗的情緒需求',
          },
        ],
      },
      {
        title: '特殊飼養考量',
        subchapters: [
          {
            title: '老年狗狗的照顧需求',
          },
          {
            title: '母狗懷孕和哺乳期的特別照顧',
          },
          {
            title: '適應新家庭和生活變化',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗健康與幸福指南',
    chapters: [
      {
        title: '飲食管理',
        subchapters: [
          {
            title: '提供均衡的飲食',
          },
          {
            title: '適量的餵食和定時餵食',
          },
          {
            title: '特殊飲食需求和限制',
          },
        ],
      },
      {
        title: '健康照護',
        subchapters: [
          {
            title: '定期疫苗接種和醫療檢查',
          },
          {
            title: '預防寄生蟲和外部寄生蟲控制',
          },
          {
            title: '疾病和急救處理',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '基本指令訓練',
          },
          {
            title: '解決行為問題和惡習',
          },
          {
            title: '社交化和人際互動訓練',
          },
        ],
      },
      {
        title: '提供良好生活環境',
        subchapters: [
          {
            title: '適當的居住空間和狗床',
          },
          {
            title: '適量的運動和戶外活動',
          },
          {
            title: '玩具和娛樂設施',
          },
        ],
      },
      {
        title: '心理健康與關愛',
        subchapters: [
          {
            title: '提供情感安全和穩定環境',
          },
          {
            title: '定期陪伴和關愛時間',
          },
          {
            title: '注意狗狗的情緒和行為變化',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗養育指南',
    chapters: [
      {
        title: '選擇合適的狗種',
        subchapters: [
          {
            title: '了解不同狗種的特性',
          },
          {
            title: '考慮生活空間和家庭環境',
          },
          {
            title: '選擇適合自己的狗狗',
          },
        ],
      },
      {
        title: '提供良好的環境',
        subchapters: [
          {
            title: '室內與室外空間的安排',
          },
          {
            title: '舒適的睡眠區域',
          },
          {
            title: '安全的遊戲與活動區域',
          },
        ],
      },
      {
        title: '健康照護與飲食',
        subchapters: [
          {
            title: '定期的疫苗接種與醫療檢查',
          },
          {
            title: '適當的飲食安排',
          },
          {
            title: '控制體重與適度運動',
          },
        ],
      },
      {
        title: '基本訓練與社交化',
        subchapters: [
          {
            title: '基本指令訓練',
          },
          {
            title: '社交化訓練',
          },
          {
            title: '解決常見的行為問題',
          },
        ],
      },
      {
        title: '建立親密關係',
        subchapters: [
          {
            title: '給予愛與關懷',
          },
          {
            title: '適時的犒賞與鼓勵',
          },
          {
            title: '建立互信與溝通',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗飼養指南',
    chapters: [
      {
        title: '選擇適合的狗種',
        subchapters: [
          {
            title: '了解不同狗種的特性',
          },
          {
            title: '考慮家庭狀況與需求',
          },
          {
            title: '尋找合適的繁殖者或領養途徑',
          },
        ],
      },
      {
        title: '提供良好的生活環境',
        subchapters: [
          {
            title: '設置舒適的睡眠區域',
          },
          {
            title: '提供安全的遊玩空間',
          },
          {
            title: '維護良好的衛生環境',
          },
        ],
      },
      {
        title: '健康護理與營養',
        subchapters: [
          {
            title: '定期的疫苗接種與醫療檢查',
          },
          {
            title: '適當的飲食管理',
          },
          {
            title: '提供適度的運動與遊戲',
          },
        ],
      },
      {
        title: '基本訓練與社交化',
        subchapters: [
          {
            title: '基礎指令的訓練',
          },
          {
            title: '社交化的培養',
          },
          {
            title: '解決常見行為問題',
          },
        ],
      },
      {
        title: '建立親密關係',
        subchapters: [
          {
            title: '建立信任與互動',
          },
          {
            title: '照顧與愛護',
          },
          {
            title: '提供適當的犒賞與獎勵',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗飼養基礎',
    chapters: [
      {
        title: '挑選合適的狗種',
        subchapters: [
          {
            title: '了解不同狗種的需求',
          },
          {
            title: '考慮家庭環境與生活型態',
          },
          {
            title: '找到正規的狗繁殖者或領養機構',
          },
        ],
      },
      {
        title: '提供良好的生活環境',
        subchapters: [
          {
            title: '打造舒適的睡眠空間',
          },
          {
            title: '建立安全的遊戲區域',
          },
          {
            title: '保持整潔與衛生',
          },
        ],
      },
      {
        title: '餵養與營養管理',
        subchapters: [
          {
            title: '選擇適合的狗糧品牌',
          },
          {
            title: '建立定期餵食時刻',
          },
          {
            title: '控制食物份量與營養均衡',
          },
        ],
      },
      {
        title: '基本訓練與社交化',
        subchapters: [
          {
            title: '建立基礎的聽命訓練',
          },
          {
            title: '社交化的重要性',
          },
          {
            title: '解決常見的行為問題',
          },
        ],
      },
      {
        title: '健康護理與醫療',
        subchapters: [
          {
            title: '定期的疫苗接種與健康檢查',
          },
          {
            title: '寵物保險的重要性',
          },
          {
            title: '緊急情況的應變與急救措施',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗飼養基礎',
    chapters: [
      {
        title: '挑選合適的狗種',
        subchapters: [
          {
            title: '了解不同狗種的需求',
          },
          {
            title: '考慮家庭環境與生活型態',
          },
          {
            title: '找到正規的狗繁殖者或領養機構',
          },
        ],
      },
      {
        title: '提供良好的生活環境',
        subchapters: [
          {
            title: '打造舒適的睡眠空間',
          },
          {
            title: '建立安全的遊戲區域',
          },
          {
            title: '保持整潔與衛生',
          },
        ],
      },
      {
        title: '餵養與營養管理',
        subchapters: [
          {
            title: '選擇適合的狗糧品牌',
          },
          {
            title: '建立定期餵食時刻',
          },
          {
            title: '控制食物份量與營養均衡',
          },
        ],
      },
      {
        title: '基本訓練與社交化',
        subchapters: [
          {
            title: '建立基礎的聽命訓練',
          },
          {
            title: '社交化的重要性',
          },
          {
            title: '解決常見的行為問題',
          },
        ],
      },
      {
        title: '健康護理與醫療',
        subchapters: [
          {
            title: '定期的疫苗接種與健康檢查',
          },
          {
            title: '寵物保險的重要性',
          },
          {
            title: '緊急情況的應變與急救措施',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗的訓練與社交化',
    chapters: [
      {
        title: '基礎訓練技巧',
        subchapters: [
          {
            title: '口令訓練',
          },
          {
            title: '走路牽引訓練',
          },
          {
            title: '基本禮儀訓練',
          },
        ],
      },
      {
        title: '進階訓練範例',
        subchapters: [
          {
            title: '高度召回訓練',
          },
          {
            title: '障礙物訓練',
          },
          {
            title: '示範訓練',
          },
        ],
      },
      {
        title: '社交化訓練',
        subchapters: [
          {
            title: '與人類的互動',
          },
          {
            title: '與其他狗狗的相處',
          },
          {
            title: '適應不同環境',
          },
        ],
      },
      {
        title: '解決問題行為',
        subchapters: [
          {
            title: '咬人行為的處理',
          },
          {
            title: '吠叫行為的控制',
          },
          {
            title: '焦慮與恐懼問題的解決',
          },
        ],
      },
      {
        title: '特殊訓練技巧',
        subchapters: [
          {
            title: '搜救犬訓練',
          },
          {
            title: '治療犬訓練',
          },
          {
            title: '競技犬訓練',
          },
        ],
      },
    ],
  },
  {
    tag: ['狗狗飼養'],
    title: '狗狗的健康管理',
    chapters: [
      {
        title: '日常餵食',
        subchapters: [
          {
            title: '選擇適合的狗糧',
          },
          {
            title: '控制飲食量和餵食時間',
          },
          {
            title: '食物禁忌與安全',
          },
        ],
      },
      {
        title: '常見疾病預防',
        subchapters: [
          {
            title: '定期疫苗接種',
          },
          {
            title: '寄生蟲預防和驅除',
          },
          {
            title: '常見疾病的早期警示',
          },
        ],
      },
      {
        title: '適量運動與訓練',
        subchapters: [
          {
            title: '選擇適合的運動方式',
          },
          {
            title: '定期運動與散步',
          },
          {
            title: '智力訓練與玩樂',
          },
        ],
      },
      {
        title: '心理健康照顧',
        subchapters: [
          {
            title: '提供安全和舒適的環境',
          },
          {
            title: '減輕焦慮和壓力',
          },
          {
            title: '建立良好的日常例行',
          },
        ],
      },
      {
        title: '定期健康檢查',
        subchapters: [
          {
            title: '找尋可信賴的獸醫',
          },
          {
            title: '定期檢查和健康評估',
          },
          {
            title: '保持疫苗和預防藥物更新',
          },
        ],
      },
    ],
  },
];

/** 貓咪飼養 */
const catFeeding: courseHierarchyType[] = [
  {
    tag: ['貓咪飼養'],
    title: '貓咪幸福生活指南',
    chapters: [
      {
        title: '貓咪基本需求',
        subchapters: [
          {
            title: '提供適當的飲食',
          },
          {
            title: '建立舒適的居住環境',
          },
          {
            title: '提供安全的遊戲和休息空間',
          },
        ],
      },
      {
        title: '健康管理',
        subchapters: [
          {
            title: '定期醫療檢查和疫苗接種',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
          {
            title: '保持適當的體重和運動量',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '提供適當的貓咪玩具和刺激',
          },
          {
            title: '教導基本指令和行為',
          },
          {
            title: '解決常見的行為問題',
          },
        ],
      },
      {
        title: '貓咪的心理健康',
        subchapters: [
          {
            title: '提供足夠的關愛和陪伴',
          },
          {
            title: '提供安全感和穩定的環境',
          },
          {
            title: '理解貓咪的行為和情緒需求',
          },
        ],
      },
      {
        title: '特殊飼養考量',
        subchapters: [
          {
            title: '老年貓咪的照顧需求',
          },
          {
            title: '懷孕和哺乳期貓咪的特別照顧',
          },
          {
            title: '適應新家庭和生活變化',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪健康與幸福指南',
    chapters: [
      {
        title: '飲食管理',
        subchapters: [
          {
            title: '提供均衡的貓咪飲食',
          },
          {
            title: '餵食頻率和份量控制',
          },
          {
            title: '特殊飲食需求和禁忌食物',
          },
        ],
      },
      {
        title: '健康護理',
        subchapters: [
          {
            title: '定期醫療檢查和疫苗接種',
          },
          {
            title: '預防寄生蟲和跳蚤',
          },
          {
            title: '常見疾病和處理方法',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '貓砂盆和如廁習慣訓練',
          },
          {
            title: '教導基本指令和行為',
          },
          {
            title: '解決貓咪的行為問題',
          },
        ],
      },
      {
        title: '提供良好生活環境',
        subchapters: [
          {
            title: '舒適的休息和遊戲空間',
          },
          {
            title: '提供適當的貓咪玩具和刺激',
          },
          {
            title: '設置貓爬架和攀爬空間',
          },
        ],
      },
      {
        title: '心理健康與關愛',
        subchapters: [
          {
            title: '提供安全感和穩定的環境',
          },
          {
            title: '定期陪伴和互動時間',
          },
          {
            title: '照顧貓咪的情緒和心理需求',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪養成指南',
    chapters: [
      {
        title: '貓咪基本需求',
        subchapters: [
          {
            title: '提供適當的飲食',
          },
          {
            title: '建立舒適的居住環境',
          },
          {
            title: '提供安全的遊戲和休息空間',
          },
        ],
      },
      {
        title: '健康護理',
        subchapters: [
          {
            title: '定期獸醫檢查和疫苗接種',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
          {
            title: '保持理想體重和適度運動',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '社交化和人際互動',
          },
          {
            title: '教導基本指令和行為',
          },
          {
            title: '解決貓咪的行為問題',
          },
        ],
      },
      {
        title: '貓咪心理健康',
        subchapters: [
          {
            title: '提供穩定的環境和安全感',
          },
          {
            title: '適當的陪伴和關愛',
          },
          {
            title: '貓咪的情緒和壓力管理',
          },
        ],
      },
      {
        title: '特殊飼養考量',
        subchapters: [
          {
            title: '懷孕和哺乳期貓咪的照顧',
          },
          {
            title: '老年貓咪的特別需求',
          },
          {
            title: '適應新環境和生活變化',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪的健康與幸福',
    chapters: [
      {
        title: '飲食管理',
        subchapters: [
          {
            title: '提供均衡的貓咪飲食',
          },
          {
            title: '適量餵食和定時餵食',
          },
          {
            title: '特殊飲食需求和禁忌食物',
          },
        ],
      },
      {
        title: '健康護理',
        subchapters: [
          {
            title: '定期獸醫檢查和疫苗接種',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
          {
            title: '緊急救援和急救知識',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '貓砂盆訓練和如廁習慣',
          },
          {
            title: '社交化和適應新環境',
          },
          {
            title: '解決貓咪的行為問題',
          },
        ],
      },
      {
        title: '提供良好生活環境',
        subchapters: [
          {
            title: '舒適的睡眠和休息空間',
          },
          {
            title: '適當的遊戲和運動',
          },
          {
            title: '安全的室內和室外環境',
          },
        ],
      },
      {
        title: '心理健康與關愛',
        subchapters: [
          {
            title: '提供穩定的日常生活',
          },
          {
            title: '定期互動和關愛時間',
          },
          {
            title: '陪伴和照顧貓咪的情緒需求',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪的幸福生活指南',
    chapters: [
      {
        title: '貓咪的基本需求',
        subchapters: [
          {
            title: '提供均衡的飲食',
          },
          {
            title: '提供安全和舒適的居住環境',
          },
          {
            title: '提供適當的運動和活動空間',
          },
        ],
      },
      {
        title: '健康護理',
        subchapters: [
          {
            title: '定期獸醫檢查和預防疫苗',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
          {
            title: '照顧貓咪的牙齒和口腔健康',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '貓砂盆訓練和如廁習慣',
          },
          {
            title: '教導基本指令和行為',
          },
          {
            title: '解決貓咪的行為問題',
          },
        ],
      },
      {
        title: '提供心理滿足',
        subchapters: [
          {
            title: '提供適當的玩具和遊戲',
          },
          {
            title: '提供適量的社交互動',
          },
          {
            title: '建立安全和舒適的撫摸環境',
          },
        ],
      },
      {
        title: '特殊飼養考量',
        subchapters: [
          {
            title: '懷孕和哺乳期貓咪的照顧',
          },
          {
            title: '老年貓咪的特別需求',
          },
          {
            title: '貓咪的生活環境適應',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '愛與照顧貓咪',
    chapters: [
      {
        title: '貓咪的基本需求',
        subchapters: [
          {
            title: '提供舒適的居住環境',
          },
          {
            title: '提供適當的飲食和食具',
          },
          {
            title: '確保良好的衛生環境',
          },
        ],
      },
      {
        title: '健康與醫療',
        subchapters: [
          {
            title: '定期獸醫檢查和疫苗接種',
          },
          {
            title: '貓咪的常見疾病和預防措施',
          },
          {
            title: '處理貓咪的常見健康問題',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '教導貓咪基本指令',
          },
          {
            title: '幫助貓咪適應新環境',
          },
          {
            title: '解決貓咪的不良行為',
          },
        ],
      },
      {
        title: '提供心理滿足',
        subchapters: [
          {
            title: '遊戲和互動的重要性',
          },
          {
            title: '提供適當的玩具和娛樂',
          },
          {
            title: '貓咪的社交需求和陪伴',
          },
        ],
      },
      {
        title: '特殊貓咪照顧',
        subchapters: [
          {
            title: '懷孕貓咪的照顧',
          },
          {
            title: '幼貓的健康和發展',
          },
          {
            title: '老年貓咪的需求和關懷',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '愛與照顧貓咪的秘訣',
    chapters: [
      {
        title: '準備迎接新貓咪',
        subchapters: [
          {
            title: '貓咪的家居環境設置',
          },
          {
            title: '選擇合適的貓咪食品',
          },
          {
            title: '準備貓咪的基本用品',
          },
        ],
      },
      {
        title: '貓咪的健康護理',
        subchapters: [
          {
            title: '定期獸醫檢查和疫苗接種',
          },
          {
            title: '貓咪的飲食管理和餵食建議',
          },
          {
            title: '如何控制貓咪的體重和保持活躍',
          },
        ],
      },
      {
        title: '貓咪的行為訓練',
        subchapters: [
          {
            title: '建立貓咪的排泄習慣',
          },
          {
            title: '教導貓咪基本指令和技巧',
          },
          {
            title: '解決貓咪的不良行為問題',
          },
        ],
      },
      {
        title: '提供貓咪的心理滿足',
        subchapters: [
          {
            title: '提供適當的遊戲和玩具',
          },
          {
            title: '提供安全和溫馨的撫摸環境',
          },
          {
            title: '創建貓咪的娛樂空間和休息區',
          },
        ],
      },
      {
        title: '特殊貓咪的照顧',
        subchapters: [
          {
            title: '懷孕和哺乳期貓咪的需求',
          },
          {
            title: '老年貓咪的關懷和健康管理',
          },
          {
            title: '處理貓咪的常見健康問題',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪的日常照顧',
    chapters: [
      {
        title: '飲食管理',
        subchapters: [
          {
            title: '選擇適合的貓糧',
          },
          {
            title: '控制飲食量和餵食時間',
          },
          {
            title: '食物禁忌與安全',
          },
        ],
      },
      {
        title: '環境設置',
        subchapters: [
          {
            title: '提供舒適的休息區域',
          },
          {
            title: '提供適當的遊戲和娛樂',
          },
          {
            title: '安全的室內和室外環境',
          },
        ],
      },
      {
        title: '衛生與清潔',
        subchapters: [
          {
            title: '定期梳理與毛髮護理',
          },
          {
            title: '定期洗澡與耳部清潔',
          },
          {
            title: '控制寄生蟲與蟲媒',
          },
        ],
      },
      {
        title: '適量運動與遊戲',
        subchapters: [
          {
            title: '提供適當的運動空間',
          },
          {
            title: '使用適合的玩具和遊戲設施',
          },
          {
            title: '與貓咪互動和訓練',
          },
        ],
      },
      {
        title: '定期健康檢查',
        subchapters: [
          {
            title: '找尋可信賴的獸醫',
          },
          {
            title: '定期檢查和預防接種',
          },
          {
            title: '保持疫苗和驅蟲藥物更新',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪的健康與照顧',
    chapters: [
      {
        title: '日常餵食管理',
        subchapters: [
          {
            title: '選擇適合的貓糧品牌',
          },
          {
            title: '建立固定的餵食時間',
          },
          {
            title: '確保充足的水源',
          },
        ],
      },
      {
        title: '環境與住所安排',
        subchapters: [
          {
            title: '提供舒適的睡眠區域',
          },
          {
            title: '設置貓咪專屬的活動空間',
          },
          {
            title: '安全防護與室內外區域劃分',
          },
        ],
      },
      {
        title: '衛生與清潔照顧',
        subchapters: [
          {
            title: '定期梳理與毛髮清潔',
          },
          {
            title: '保持貓砂盆的清潔與更換',
          },
          {
            title: '耳部和牙齒的清潔保健',
          },
        ],
      },
      {
        title: '適度運動與遊戲',
        subchapters: [
          {
            title: '提供適當的運動設施和玩具',
          },
          {
            title: '定期進行互動遊戲和訓練',
          },
          {
            title: '考慮貓咪的年齡和健康狀態',
          },
        ],
      },
      {
        title: '定期健康檢查與預防醫療',
        subchapters: [
          {
            title: '建立定期的獸醫檢查計劃',
          },
          {
            title: '接種必要的疫苗和預防藥物',
          },
          {
            title: '監控貓咪的體重和身體狀況',
          },
        ],
      },
    ],
  },
  {
    tag: ['貓咪飼養'],
    title: '貓咪的幸福生活指南',
    chapters: [
      {
        title: '提供良好的飲食環境',
        subchapters: [
          {
            title: '選擇適合的貓糧品牌',
          },
          {
            title: '提供新鮮的飲用水',
          },
          {
            title: '定期觀察飲食狀態',
          },
        ],
      },
      {
        title: '打造舒適的居住環境',
        subchapters: [
          {
            title: '設置舒適的睡覺空間',
          },
          {
            title: '提供適當的遊戲和爬架',
          },
          {
            title: '建立安全的室內環境',
          },
        ],
      },
      {
        title: '建立規律的日常照顧',
        subchapters: [
          {
            title: '定期梳理毛髮',
          },
          {
            title: '清潔貓砂盆',
          },
          {
            title: '注意口腔衛生',
          },
        ],
      },
      {
        title: '提供豐富的遊戲和娛樂',
        subchapters: [
          {
            title: '準備多種玩具供選擇',
          },
          {
            title: '進行互動遊戲和訓練',
          },
          {
            title: '安排定期戶外活動',
          },
        ],
      },
      {
        title: '定期健康檢查和護理',
        subchapters: [
          {
            title: '定期獸醫檢查',
          },
          {
            title: '預防蟲害和疫苗接種',
          },
          {
            title: '保持適當體重和健康狀態',
          },
        ],
      },
    ],
  },
];

/** 兔兔飼養 */
const rabbitBreeding: courseHierarchyType[] = [
  {
    tag: ['兔兔飼養'],
    title: '兔兔的健康生活指南',
    chapters: [
      {
        title: '提供適宜的飼料和飲水',
        subchapters: [
          {
            title: '選擇優質的兔糧品牌',
          },
          {
            title: '提供新鮮的蔬菜和草料',
          },
          {
            title: '定期更換飲水器中的水',
          },
        ],
      },
      {
        title: '打造舒適的居住環境',
        subchapters: [
          {
            title: '準備適當大小的籠舍',
          },
          {
            title: '提供舒適的床舖材料',
          },
          {
            title: '保持居住環境的清潔',
          },
        ],
      },
      {
        title: '定期進行健康檢查',
        subchapters: [
          {
            title: '定期帶兔兔去獸醫檢查',
          },
          {
            title: '預防蟲害和接種疫苗',
          },
          {
            title: '觀察兔兔的體態和食慾變化',
          },
        ],
      },
      {
        title: '提供適當的運動和娛樂',
        subchapters: [
          {
            title: '為兔兔提供遊戲和咀嚼玩具',
          },
          {
            title: '定期放兔兔出來活動',
          },
          {
            title: '與兔兔互動並進行訓練',
          },
        ],
      },
      {
        title: '建立良好的社交環境',
        subchapters: [
          {
            title: '適時與兔兔進行社交化訓練',
          },
          {
            title: '與其他寵物和家人進行互動',
          },
          {
            title: '提供充足的安全感和舒適區域',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '打造幸福兔兔的飼養指南',
    chapters: [
      {
        title: '提供均衡的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧品牌',
          },
          {
            title: '添加新鮮蔬菜和水果',
          },
          {
            title: '控制食量和餵食時間',
          },
        ],
      },
      {
        title: '營造安全舒適的生活環境',
        subchapters: [
          {
            title: '提供適當大小的籠舍',
          },
          {
            title: '設置舒適的窩和遊戲區域',
          },
          {
            title: '保持清潔和衛生',
          },
        ],
      },
      {
        title: '定期醫療保健',
        subchapters: [
          {
            title: '找專業獸醫進行健康檢查',
          },
          {
            title: '進行必要的疫苗接種',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
        ],
      },
      {
        title: '提供充足的運動和娛樂',
        subchapters: [
          {
            title: '提供安全的玩具和咀嚼物',
          },
          {
            title: '定期放養供兔子活動',
          },
          {
            title: '訓練兔子進行基本指令',
          },
        ],
      },
      {
        title: '建立良好的社交環境',
        subchapters: [
          {
            title: '與兔子建立親密的互動',
          },
          {
            title: '與其他寵物進行正確的介紹',
          },
          {
            title: '提供安全和適當的社交場所',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '餵食與照顧兔兔的指南',
    chapters: [
      {
        title: '提供均衡的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧品牌',
          },
          {
            title: '添加新鮮蔬菜和水果',
          },
          {
            title: '控制食量和餵食時間',
          },
        ],
      },
      {
        title: '創造安全舒適的生活環境',
        subchapters: [
          {
            title: '選擇適合的籠舍大小',
          },
          {
            title: '提供舒適的窩和睡眠區域',
          },
          {
            title: '保持環境的清潔和衛生',
          },
        ],
      },
      {
        title: '定期進行健康檢查和護理',
        subchapters: [
          {
            title: '定期帶兔兔去獸醫進行健康檢查',
          },
          {
            title: '控制寄生蟲和跳蚤',
          },
          {
            title: '照顧兔兔的毛髮和牙齒',
          },
        ],
      },
      {
        title: '提供適當的運動和娛樂',
        subchapters: [
          {
            title: '提供安全的玩具和咀嚼物',
          },
          {
            title: '定期放養供兔兔活動',
          },
          {
            title: '訓練兔兔進行基本指令',
          },
        ],
      },
      {
        title: '建立良好的社交環境',
        subchapters: [
          {
            title: '與兔兔建立親密的互動',
          },
          {
            title: '與其他寵物進行正確的介紹',
          },
          {
            title: '提供安全和適當的社交場所',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '兔兔的日常護理與飼養',
    chapters: [
      {
        title: '提供適宜的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧種類',
          },
          {
            title: '添加新鮮蔬菜和草料',
          },
          {
            title: '避免過度餵食和不合適的食物',
          },
        ],
      },
      {
        title: '建立舒適的棲息環境',
        subchapters: [
          {
            title: '提供適當大小的籠子或棲息空間',
          },
          {
            title: '提供舒適的床舖材料',
          },
          {
            title: '保持環境乾淨和通風',
          },
        ],
      },
      {
        title: '定期護理和保健',
        subchapters: [
          {
            title: '定期檢查兔兔的健康狀況',
          },
          {
            title: '清潔兔兔的耳朵和眼睛',
          },
          {
            title: '修剪兔兔的指甲',
          },
        ],
      },
      {
        title: '提供適度的運動和娛樂',
        subchapters: [
          {
            title: '提供兔兔專屬的玩具和遊戲器具',
          },
          {
            title: '定期放養供兔兔活動',
          },
          {
            title: '訓練兔兔進行基本指令',
          },
        ],
      },
      {
        title: '建立良好的互動與社交',
        subchapters: [
          {
            title: '與兔兔建立親密的關係',
          },
          {
            title: '與其他寵物進行正確的互動',
          },
          {
            title: '提供兔兔社交的機會和環境',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '兔兔的健康與飼養',
    chapters: [
      {
        title: '提供均衡的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧',
          },
          {
            title: '添加新鮮蔬菜和水果',
          },
          {
            title: '提供充足的水源',
          },
        ],
      },
      {
        title: '營造舒適的生活環境',
        subchapters: [
          {
            title: '提供適當大小的籠子或房屋',
          },
          {
            title: '配置舒適的床墊和玩具',
          },
          {
            title: '維持適宜的溫度和通風',
          },
        ],
      },
      {
        title: '保持良好的衛生和清潔',
        subchapters: [
          {
            title: '定期清理籠子和衛生區域',
          },
          {
            title: '清潔兔子的毛髮和皮膚',
          },
          {
            title: '定期清理牙齒和耳朵',
          },
        ],
      },
      {
        title: '提供適度的運動和活動',
        subchapters: [
          {
            title: '提供兔子專屬的遊戲和玩具',
          },
          {
            title: '定期放養兔子進行活動',
          },
          {
            title: '與兔子互動和遊戲',
          },
        ],
      },
      {
        title: '定期健康檢查和醫療照顧',
        subchapters: [
          {
            title: '定期帶兔子去獸醫檢查',
          },
          {
            title: '預防接種和驅蟲',
          },
          {
            title: '處理常見的健康問題',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '兔兔的幸福生活',
    chapters: [
      {
        title: '提供健康飲食',
        subchapters: [
          {
            title: '選擇優質的兔糧',
          },
          {
            title: '添加多樣的蔬菜和草料',
          },
          {
            title: '適量提供水源',
          },
        ],
      },
      {
        title: '打造舒適的居住環境',
        subchapters: [
          {
            title: '選擇適合的籠舍大小',
          },
          {
            title: '提供舒適的床墊和玩具',
          },
          {
            title: '維持適宜的溫度和通風',
          },
        ],
      },
      {
        title: '保持良好的衛生和清潔',
        subchapters: [
          {
            title: '定期清理籠舍和衛生區',
          },
          {
            title: '清潔兔子的毛髮和皮膚',
          },
          {
            title: '定期修剪指甲',
          },
        ],
      },
      {
        title: '提供適度的運動和娛樂',
        subchapters: [
          {
            title: '提供安全的活動空間',
          },
          {
            title: '定期放養進行活動',
          },
          {
            title: '溫柔的互動和撫摸',
          },
        ],
      },
      {
        title: '定期健康檢查和醫療照顧',
        subchapters: [
          {
            title: '定期帶兔子去獸醫檢查',
          },
          {
            title: '預防疫苗和驅蟲',
          },
          {
            title: '處理常見的健康問題',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '兔兔的健康生活',
    chapters: [
      {
        title: '提供均衡的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧',
          },
          {
            title: '添加新鮮蔬菜和水果',
          },
          {
            title: '提供足夠的水源',
          },
        ],
      },
      {
        title: '創造舒適的居住環境',
        subchapters: [
          {
            title: '提供適當大小的籠舍',
          },
          {
            title: '提供舒適的睡窩和玩具',
          },
          {
            title: '維持適宜的溫度和濕度',
          },
        ],
      },
      {
        title: '定期護理和清潔',
        subchapters: [
          {
            title: '刷毛和梳理',
          },
          {
            title: '定期修剪指甲',
          },
          {
            title: '保持耳朵和牙齒衛生',
          },
        ],
      },
      {
        title: '提供足夠的運動和娛樂',
        subchapters: [
          {
            title: '定期放養和遊戲',
          },
          {
            title: '提供挖掘和咬嚼的機會',
          },
          {
            title: '與兔兔互動和訓練',
          },
        ],
      },
      {
        title: '定期健康檢查和醫療照顧',
        subchapters: [
          {
            title: '定期帶兔兔去獸醫檢查',
          },
          {
            title: '預防疫苗和驅蟲',
          },
          {
            title: '處理常見的健康問題',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '培養愛兔的日常',
    chapters: [
      {
        title: '提供充足的食物',
        subchapters: [
          {
            title: '選擇適合的兔糧',
          },
          {
            title: '提供新鮮的草料',
          },
          {
            title: '餵食適量的蔬菜和水果',
          },
        ],
      },
      {
        title: '打造舒適的居住環境',
        subchapters: [
          {
            title: '準備寬敞的籠舍',
          },
          {
            title: '提供舒適的睡窩',
          },
          {
            title: '設置安全的遊戲區域',
          },
        ],
      },
      {
        title: '定期護理和清潔',
        subchapters: [
          {
            title: '梳理兔兔的毛髮',
          },
          {
            title: '定期修剪指甲',
          },
          {
            title: '清潔兔兔的糞便區',
          },
        ],
      },
      {
        title: '提供適度的運動和娛樂',
        subchapters: [
          {
            title: '定期放養兔兔運動',
          },
          {
            title: '提供兔兔喜愛的玩具',
          },
          {
            title: '與兔兔互動遊戲',
          },
        ],
      },
      {
        title: '保護兔兔的健康',
        subchapters: [
          {
            title: '定期帶兔兔就醫檢查',
          },
          {
            title: '防止寄生蟲感染',
          },
          {
            title: '控制兔兔的體重',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '兔兔的幸福生活',
    chapters: [
      {
        title: '提供均衡的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧',
          },
          {
            title: '提供多樣的草料',
          },
          {
            title: '餵食適量的新鮮蔬果',
          },
        ],
      },
      {
        title: '打造舒適的居住環境',
        subchapters: [
          {
            title: '準備寬敞的籠舍',
          },
          {
            title: '提供舒適的睡窩和窩居',
          },
          {
            title: '為兔兔建立安全的活動空間',
          },
        ],
      },
      {
        title: '定期護理與健康管理',
        subchapters: [
          {
            title: '定期梳理兔兔的毛髮',
          },
          {
            title: '定期修剪兔兔的指甲',
          },
          {
            title: '監控兔兔的健康狀態',
          },
        ],
      },
      {
        title: '提供充足的運動和娛樂',
        subchapters: [
          {
            title: '提供適當大小的遊戲器具',
          },
          {
            title: '定期放養兔兔進行運動',
          },
          {
            title: '與兔兔互動和訓練',
          },
        ],
      },
      {
        title: '與兔兔建立良好的關係',
        subchapters: [
          {
            title: '提供兔兔所需的關愛和陪伴',
          },
          {
            title: '適時進行社交化訓練',
          },
          {
            title: '建立信任和尊重的互動',
          },
        ],
      },
    ],
  },
  {
    tag: ['兔兔飼養'],
    title: '兔兔的快樂生活',
    chapters: [
      {
        title: '提供適當的飲食',
        subchapters: [
          {
            title: '選擇適合的兔糧',
          },
          {
            title: '餵食多樣的草料',
          },
          {
            title: '提供新鮮蔬果的均衡飲食',
          },
        ],
      },
      {
        title: '打造舒適的居住環境',
        subchapters: [
          {
            title: '準備寬敞的籠舍',
          },
          {
            title: '提供舒適的睡窩和窩居',
          },
          {
            title: '創造安全的活動空間',
          },
        ],
      },
      {
        title: '定期護理和健康管理',
        subchapters: [
          {
            title: '梳理兔兔的毛髮',
          },
          {
            title: '修剪兔兔的指甲',
          },
          {
            title: '定期檢查兔兔的健康狀態',
          },
        ],
      },
      {
        title: '提供豐富的運動和娛樂',
        subchapters: [
          {
            title: '遊戲器具的選擇和設置',
          },
          {
            title: '定期放養兔兔進行運動',
          },
          {
            title: '與兔兔互動和訓練',
          },
        ],
      },
      {
        title: '建立親密的關係',
        subchapters: [
          {
            title: '給予充分的關愛和陪伴',
          },
          {
            title: '進行適當的社交化訓練',
          },
          {
            title: '建立互信和尊重的互動',
          },
        ],
      },
    ],
  },
];

/** 貓咪品種 */
const catBreed: courseHierarchyType[] = [
  {
    tag: ['貓咪品種'],
    title: '常見貓咪品種介紹',
    chapters: [
      {
        title: '短毛貓品種',
        subchapters: [
          {
            title: '美國短毛貓',
          },
          {
            title: '英國短毛貓',
          },
          {
            title: '曼島貓',
          },
        ],
      },
      {
        title: '長毛貓品種',
        subchapters: [
          {
            title: '波斯貓',
          },
          {
            title: '挪威森林貓',
          },
          {
            title: '孟加拉貓',
          },
        ],
      },
      {
        title: '無毛貓品種',
        subchapters: [
          {
            title: '無毛貓',
          },
          {
            title: '巴西尼貓',
          },
          {
            title: '加拿大無毛貓',
          },
        ],
      },
      {
        title: '異國短毛貓品種',
        subchapters: [
          {
            title: '暹羅貓',
          },
          {
            title: '伯曼貓',
          },
          {
            title: '埃及短毛貓',
          },
        ],
      },
      {
        title: '特殊貓咪品種',
        subchapters: [
          {
            title: '異種貓',
          },
          {
            title: '狸花貓',
          },
          {
            title: '玳瑁貓',
          },
        ],
      },
    ],
  },
];

/** 狗狗品種 */
const dogBreed: courseHierarchyType[] = [
  {
    tag: ['狗狗品種'],
    title: '常見狗狗品種介紹',
    chapters: [
      {
        title: '大型犬品種',
        subchapters: [
          {
            title: '德國牧羊犬',
          },
          {
            title: '拉布拉多犬',
          },
          {
            title: '黃金獵犬',
          },
        ],
      },
      {
        title: '中型犬品種',
        subchapters: [
          {
            title: '柴犬',
          },
          {
            title: '哈士奇',
          },
          {
            title: '博美犬',
          },
        ],
      },
      {
        title: '小型犬品種',
        subchapters: [
          {
            title: '貴賓犬',
          },
          {
            title: '西高地白梗',
          },
          {
            title: '比熊犬',
          },
        ],
      },
      {
        title: '玩具犬品種',
        subchapters: [
          {
            title: '吉娃娃',
          },
          {
            title: '迷你杜賓',
          },
          {
            title: '馬爾濟斯犬',
          },
        ],
      },
      {
        title: '工作犬品種',
        subchapters: [
          {
            title: '拾獵犬',
          },
          {
            title: '警犬',
          },
          {
            title: '導盲犬',
          },
        ],
      },
    ],
  },
];

/** 寵物照顧基礎 */
const petCareBasics: courseHierarchyType[] = [
  {
    tag: ['寵物照顧基礎'],
    title: '寵物照顧基礎手冊',
    chapters: [
      {
        title: '飲食照顧',
        subchapters: [
          {
            title: '食物選擇',
          },
          {
            title: '定時餵食',
          },
          {
            title: '飲水管理',
          },
        ],
      },
      {
        title: '衛生照顧',
        subchapters: [
          {
            title: '洗澡技巧',
          },
          {
            title: '毛髮護理',
          },
          {
            title: '牙齒清潔',
          },
        ],
      },
      {
        title: '健康管理',
        subchapters: [
          {
            title: '疫苗接種',
          },
          {
            title: '寄生蟲預防',
          },
          {
            title: '定期健康檢查',
          },
        ],
      },
      {
        title: '活動與運動',
        subchapters: [
          {
            title: '散步與戶外活動',
          },
          {
            title: '玩具選擇',
          },
          {
            title: '室內遊戲',
          },
        ],
      },
      {
        title: '行為訓練',
        subchapters: [
          {
            title: '基本指令訓練',
          },
          {
            title: '社交化訓練',
          },
          {
            title: '解決問題行為',
          },
        ],
      },
    ],
  },
];

/** 寵物營養學 */
const petNutrition: courseHierarchyType[] = [
  {
    tag: ['寵物營養學'],
    title: '寵物營養學入門',
    chapters: [
      {
        title: '營養需求',
        subchapters: [
          {
            title: '主要營養素',
          },
          {
            title: '能量需求',
          },
          {
            title: '特殊營養需求',
          },
        ],
      },
      {
        title: '飲食規劃',
        subchapters: [
          {
            title: '食物種類',
          },
          {
            title: '食物配比',
          },
          {
            title: '食物安全',
          },
        ],
      },
      {
        title: '食材選擇',
        subchapters: [
          {
            title: '蛋白質來源',
          },
          {
            title: '碳水化合物來源',
          },
          {
            title: '脂肪來源',
          },
        ],
      },
      {
        title: '特殊飲食需求',
        subchapters: [
          {
            title: '過敏與食物不耐症',
          },
          {
            title: '特殊疾病管理',
          },
          {
            title: '生理狀態調整',
          },
        ],
      },
      {
        title: '營養評估',
        subchapters: [
          {
            title: '體重管理',
          },
          {
            title: '皮膚與毛髮狀態',
          },
          {
            title: '消化系統健康',
          },
        ],
      },
    ],
  },
];

/** 寵物健康照護 */
const petHealthCare: courseHierarchyType[] = [
  {
    tag: ['寵物健康照護'],
    title: '寵物健康照護指南',
    chapters: [
      {
        title: '常見疾病預防',
        subchapters: [
          {
            title: '疫苗接種',
          },
          {
            title: '寄生蟲預防',
          },
          {
            title: '常見疾病識別',
          },
        ],
      },
      {
        title: '日常護理',
        subchapters: [
          {
            title: '定期檢查與保健',
          },
          {
            title: '口腔護理',
          },
          {
            title: '毛髮護理',
          },
        ],
      },
      {
        title: '飲食與營養',
        subchapters: [
          {
            title: '適量餵食',
          },
          {
            title: '特殊飲食需求',
          },
          {
            title: '營養補充品',
          },
        ],
      },
      {
        title: '適度運動',
        subchapters: [
          {
            title: '日常運動計劃',
          },
          {
            title: '室內外活動',
          },
          {
            title: '遊戲與玩耍',
          },
        ],
      },
      {
        title: '心理健康',
        subchapters: [
          {
            title: '社交化訓練',
          },
          {
            title: '壓力管理',
          },
          {
            title: '環境舒適化',
          },
        ],
      },
    ],
  },
];

/** 寵物心理學 */
const petPsychology: courseHierarchyType[] = [
  {
    tag: ['寵物健康照護'],
    title: '寵物健康照護指南',
    chapters: [
      {
        title: '常見疾病預防',
        subchapters: [
          {
            title: '疫苗接種',
          },
          {
            title: '寄生蟲預防',
          },
          {
            title: '常見疾病識別',
          },
        ],
      },
      {
        title: '日常護理',
        subchapters: [
          {
            title: '定期檢查與保健',
          },
          {
            title: '口腔護理',
          },
          {
            title: '毛髮護理',
          },
        ],
      },
      {
        title: '飲食與營養',
        subchapters: [
          {
            title: '適量餵食',
          },
          {
            title: '特殊飲食需求',
          },
          {
            title: '營養補充品',
          },
        ],
      },
      {
        title: '適度運動',
        subchapters: [
          {
            title: '日常運動計劃',
          },
          {
            title: '室內外活動',
          },
          {
            title: '遊戲與玩耍',
          },
        ],
      },
      {
        title: '心理健康',
        subchapters: [
          {
            title: '社交化訓練',
          },
          {
            title: '壓力管理',
          },
          {
            title: '環境舒適化',
          },
        ],
      },
    ],
  },
];

/** 貓咪的解悶遊戲 */
const catGames: courseHierarchyType[] = [
  {
    tag: ['貓咪的解悶遊戲'],
    title: '貓咪的解悶遊戲指南',
    chapters: [
      {
        title: '智力遊戲',
        subchapters: [
          {
            title: '追逐小球',
          },
          {
            title: '尋找隱藏的零食',
          },
          {
            title: '操縱迷宮玩具',
          },
        ],
      },
      {
        title: '互動玩具',
        subchapters: [
          {
            title: '挑戰追逐遊戲',
          },
          {
            title: '攀爬遊具',
          },
          {
            title: '鏈狀玩具',
          },
        ],
      },
      {
        title: 'DIY玩具',
        subchapters: [
          {
            title: '自製貓抓板',
          },
          {
            title: '自製貓窩',
          },
          {
            title: '玩具瓶挑戰',
          },
        ],
      },
      {
        title: '音樂與影像娛樂',
        subchapters: [
          {
            title: '播放貓咪專屬音樂',
          },
          {
            title: '觀賞貓咪影片',
          },
          {
            title: '互動式遊戲APP',
          },
        ],
      },
      {
        title: '社交遊戲',
        subchapters: [
          {
            title: '與主人互動遊戲',
          },
          {
            title: '與其他貓咪互動',
          },
          {
            title: '社交化活動',
          },
        ],
      },
    ],
  },
];

/** 狗狗的解悶遊戲 */
const dogGames: courseHierarchyType[] = [
  {
    tag: ['狗狗解悶遊戲'],
    title: '狗狗的解悶遊戲指南',
    chapters: [
      {
        title: '智力遊戲',
        subchapters: [
          {
            title: '尋找隱藏的零食',
          },
          {
            title: '操縱智力玩具',
          },
          {
            title: '解開迷你益智遊戲',
          },
        ],
      },
      {
        title: '互動遊戲',
        subchapters: [
          {
            title: '挑戰追逐遊戲',
          },
          {
            title: '玩捉迷藏',
          },
          {
            title: '拼圖遊戲',
          },
        ],
      },
      {
        title: '訓練遊戲',
        subchapters: [
          {
            title: '基礎訓練指令',
          },
          {
            title: '障礙訓練',
          },
          {
            title: '尋找特定物品',
          },
        ],
      },
      {
        title: '戶外遊戲',
        subchapters: [
          {
            title: '長途散步',
          },
          {
            title: '遊戲擂台',
          },
          {
            title: '水上活動',
          },
        ],
      },
      {
        title: '社交遊戲',
        subchapters: [
          {
            title: '與主人互動遊戲',
          },
          {
            title: '與其他狗狗互動',
          },
          {
            title: '參加狗狗社交活動',
          },
        ],
      },
    ],
  },
];

/** 寵物心理舒壓活動 */
const petStressRelief: courseHierarchyType[] = [
  {
    tag: ['寵物心理舒壓活動'],
    title: '寵物心理舒壓活動指南',
    chapters: [
      {
        title: '放鬆活動',
        subchapters: [
          {
            title: '按摩與放鬆技巧',
          },
          {
            title: '音樂療法',
          },
          {
            title: '靜心訓練',
          },
        ],
      },
      {
        title: '遊戲活動',
        subchapters: [
          {
            title: '寵物追逐遊戲',
          },
          {
            title: '互動玩具遊戲',
          },
          {
            title: '尋找遊戲',
          },
        ],
      },
      {
        title: '自然活動',
        subchapters: [
          {
            title: '戶外散步',
          },
          {
            title: '野餐活動',
          },
          {
            title: '水上活動',
          },
        ],
      },
      {
        title: '社交活動',
        subchapters: [
          {
            title: '寵物社交聚會',
          },
          {
            title: '與其他動物互動',
          },
          {
            title: '與主人互動',
          },
        ],
      },
      {
        title: '智力活動',
        subchapters: [
          {
            title: '智力玩具遊戲',
          },
          {
            title: '益智訓練',
          },
          {
            title: '迷宮遊戲',
          },
        ],
      },
    ],
  },
];

/** 寵物行為問題解決 */
const petBehaviorProblemSolving: courseHierarchyType[] = [
  {
    tag: ['寵物行為問題解決'],
    title: '寵物行為問題解決指南',
    chapters: [
      {
        title: '問題行為評估',
        subchapters: [
          {
            title: '觀察行為模式',
          },
          {
            title: '記錄行為頻率',
          },
          {
            title: '行為問題分類',
          },
        ],
      },
      {
        title: '行為修改技巧',
        subchapters: [
          {
            title: '正向強化訓練',
          },
          {
            title: '負向強化訓練',
          },
          {
            title: '無條件刺激法',
          },
        ],
      },
      {
        title: '環境調整',
        subchapters: [
          {
            title: '提供適當的運動',
          },
          {
            title: '建立穩定的日常生活',
          },
          {
            title: '提供安全的空間',
          },
        ],
      },
      {
        title: '專業協助',
        subchapters: [
          {
            title: '尋找寵物行為專家',
          },
          {
            title: '行為藥物治療',
          },
          {
            title: '行為療法',
          },
        ],
      },
      {
        title: '預防措施',
        subchapters: [
          {
            title: '早期社會化訓練',
          },
          {
            title: '適當的教育訓練',
          },
          {
            title: '營養均衡的飲食',
          },
        ],
      },
    ],
  },
];

/** 寵物溝通與信任建立 */
const petCommunication: courseHierarchyType[] = [
  {
    tag: ['寵物溝通與信任建立'],
    title: '寵物溝通與信任建立指南',
    chapters: [
      {
        title: '建立互信關係',
        subchapters: [
          {
            title: '尊重寵物個體差異',
          },
          {
            title: '建立日常互動習慣',
          },
          {
            title: '使用正向訓練方法',
          },
        ],
      },
      {
        title: '溝通與語言',
        subchapters: [
          {
            title: '觀察寵物身體語言',
          },
          {
            title: '學習寵物的聲音與表情',
          },
          {
            title: '與寵物建立共同語言',
          },
        ],
      },
      {
        title: '心理連結與共享活動',
        subchapters: [
          {
            title: '遊戲與互動',
          },
          {
            title: '共同探索新環境',
          },
          {
            title: '定期進行心靈交流',
          },
        ],
      },
      {
        title: '信任建立與社會化',
        subchapters: [
          {
            title: '適當社會化訓練',
          },
          {
            title: '建立安全的環境',
          },
          {
            title: '進行正確的接觸與撫摸',
          },
        ],
      },
      {
        title: '解讀寵物需求與情緒',
        subchapters: [
          {
            title: '觀察寵物飲食與排泄習慣',
          },
          {
            title: '辨識寵物情緒變化',
          },
          {
            title: '回應寵物需求與慾望',
          },
        ],
      },
    ],
  },
];

/** 寵物安全與急救知識 */
const petSafety: courseHierarchyType[] = [
  {
    tag: ['寵物安全與急救知識'],
    title: '寵物安全與急救指南',
    chapters: [
      {
        title: '建立安全環境',
        subchapters: [
          {
            title: '室內與室外安全措施',
          },
          {
            title: '有害物品的防範',
          },
          {
            title: '火災與逃生計畫',
          },
        ],
      },
      {
        title: '常見急症狀況',
        subchapters: [
          {
            title: '呼吸急救',
          },
          {
            title: '心臟急救',
          },
          {
            title: '失血與傷口處理',
          },
        ],
      },
      {
        title: '中毒與急性疾病',
        subchapters: [
          {
            title: '常見毒物與中毒症狀',
          },
          {
            title: '急性疾病的辨識與處理',
          },
          {
            title: '急性腹症的應急處理',
          },
        ],
      },
      {
        title: '骨折與創傷',
        subchapters: [
          {
            title: '骨折與骨折固定',
          },
          {
            title: '脫臼與肢體傷勢',
          },
          {
            title: '熱傷與燒傷處理',
          },
        ],
      },
      {
        title: '急救工具與知識',
        subchapters: [
          {
            title: '組織急救包的內容',
          },
          {
            title: '緊急聯絡資訊與就醫指南',
          },
          {
            title: '基本急救技巧與應用',
          },
        ],
      },
    ],
  },
];

/** 寵物美容與衛生 */
const petGrooming: courseHierarchyType[] = [
  {
    tag: ['寵物美容與衛生'],
    title: '寵物美容與衛生指南',
    chapters: [
      {
        title: '基本美容技巧',
        subchapters: [
          {
            title: '寵物毛髮護理',
          },
          {
            title: '洗澡與清潔技巧',
          },
          {
            title: '美容器具與用品介紹',
          },
        ],
      },
      {
        title: '寵物皮膚與耳部護理',
        subchapters: [
          {
            title: '常見皮膚問題與處理',
          },
          {
            title: '耳朵清潔與保健',
          },
          {
            title: '皮膚檢查與護理技巧',
          },
        ],
      },
      {
        title: '牙齒與口腔護理',
        subchapters: [
          {
            title: '牙齒清潔與口腔衛生',
          },
          {
            title: '口腔疾病預防與處理',
          },
          {
            title: '口臭問題的解決方法',
          },
        ],
      },
      {
        title: '寵物爪部護理',
        subchapters: [
          {
            title: '爪子修剪與磨砂',
          },
          {
            title: '爪子問題與疾病預防',
          },
          {
            title: '趾間皮膚護理與檢查',
          },
        ],
      },
      {
        title: '眼睛與眼耳部護理',
        subchapters: [
          {
            title: '眼部清潔與預防眼疾',
          },
          {
            title: '眼淚痕與泪腺問題',
          },
          {
            title: '眼睛與眼耳部異常檢查',
          },
        ],
      },
    ],
  },
];

/** 寵物旅行與戶外活動 */
const petTravel: courseHierarchyType[] = [
  {
    tag: ['寵物旅行與戶外活動'],
    title: '寵物旅行與戶外活動指南',
    chapters: [
      {
        title: '旅行前的準備',
        subchapters: [
          {
            title: '寵物旅行必備用品',
          },
          {
            title: '選擇合適的交通工具',
          },
          {
            title: '寵物旅行保險與證件',
          },
        ],
      },
      {
        title: '戶外活動安全',
        subchapters: [
          {
            title: '適合寵物的戶外活動',
          },
          {
            title: '寵物的熱量需求與運動量',
          },
          {
            title: '防蟲與防蚊措施',
          },
        ],
      },
      {
        title: '寵物露營與野外活動',
        subchapters: [
          {
            title: '選擇適合的露營地點',
          },
          {
            title: '露營必備裝備與環境調適',
          },
          {
            title: '野外活動的安全與預防',
          },
        ],
      },
      {
        title: '寵物旅館與住宿',
        subchapters: [
          {
            title: '選擇寵物友善的住宿地點',
          },
          {
            title: '寵物旅館的服務與設施',
          },
          {
            title: '住宿期間的照顧與管理',
          },
        ],
      },
      {
        title: '寵物的安全與急救',
        subchapters: [
          {
            title: '寵物的基本急救知識',
          },
          {
            title: '應對常見緊急情況',
          },
          {
            title: '急救用品與聯繫資訊',
          },
        ],
      },
    ],
  },
];

/** 貓咪的健康檢查技巧 */
const catHealthCheckTips: courseHierarchyType[] = [
  {
    tag: ['貓咪健康檢查技巧'],
    title: '貓咪健康檢查技巧指南',
    chapters: [
      {
        title: '外觀與行為觀察',
        subchapters: [
          {
            title: '毛髮與皮膚檢查',
          },
          {
            title: '眼睛、耳朵、鼻子觀察',
          },
          {
            title: '口腔與牙齒檢查',
          },
        ],
      },
      {
        title: '身體狀況評估',
        subchapters: [
          {
            title: '體重監控與評估',
          },
          {
            title: '肌肉與關節觀察',
          },
          {
            title: '腹部觸診檢查',
          },
        ],
      },
      {
        title: '飲食與消化健康',
        subchapters: [
          {
            title: '飲食習慣觀察',
          },
          {
            title: '糞便檢查',
          },
          {
            title: '體重管理與適當食物',
          },
        ],
      },
      {
        title: '尿液與排尿健康',
        subchapters: [
          {
            title: '尿液量觀察',
          },
          {
            title: '尿液顏色與氣味檢查',
          },
          {
            title: '排尿頻率與困難',
          },
        ],
      },
      {
        title: '常見疾病預防',
        subchapters: [
          {
            title: '預防蟲蟲感染',
          },
          {
            title: '疫苗接種與定期驗血',
          },
          {
            title: '免疫系統健康觀察',
          },
        ],
      },
    ],
  },
];

/** 狗狗的健康檢查技巧 */
const dogHealthCheckTips: courseHierarchyType[] = [
  {
    tag: ['狗狗健康檢查技巧'],
    title: '狗狗健康檢查技巧指南',
    chapters: [
      {
        title: '外觀與行為觀察',
        subchapters: [
          {
            title: '毛髮與皮膚檢查',
          },
          {
            title: '眼睛、耳朵、鼻子觀察',
          },
          {
            title: '口腔與牙齒檢查',
          },
        ],
      },
      {
        title: '身體狀況評估',
        subchapters: [
          {
            title: '體重監控與評估',
          },
          {
            title: '肌肉與關節觀察',
          },
          {
            title: '腹部觸診檢查',
          },
        ],
      },
      {
        title: '飲食與消化健康',
        subchapters: [
          {
            title: '飲食習慣觀察',
          },
          {
            title: '糞便檢查',
          },
          {
            title: '體重管理與適當食物',
          },
        ],
      },
      {
        title: '尿液與排尿健康',
        subchapters: [
          {
            title: '尿液量觀察',
          },
          {
            title: '尿液顏色與氣味檢查',
          },
          {
            title: '排尿頻率與困難',
          },
        ],
      },
      {
        title: '常見疾病預防',
        subchapters: [
          {
            title: '預防蟲蟲感染',
          },
          {
            title: '疫苗接種與定期驗血',
          },
          {
            title: '免疫系統健康觀察',
          },
        ],
      },
    ],
  },
];

/** 寵物老化護理 */
const petAgingCare: courseHierarchyType[] = [
  {
    tag: ['寵物老化護理'],
    title: 'Pet Aging Care Guide',
    chapters: [
      {
        title: 'Understanding Aging in Pets',
        subchapters: [
          {
            title: 'Common Signs of Aging',
          },
          {
            title: 'Age-Related Health Issues',
          },
          {
            title: 'Cognitive Changes in Aging Pets',
          },
        ],
      },
      {
        title: 'Nutrition for Aging Pets',
        subchapters: [
          {
            title: 'Special Dietary Needs',
          },
          {
            title: 'Weight Management',
          },
          {
            title: 'Supplements for Senior Pets',
          },
        ],
      },
      {
        title: 'Exercise and Mental Stimulation',
        subchapters: [
          {
            title: 'Low-Impact Exercise for Aging Pets',
          },
          {
            title: 'Enrichment Activities',
          },
          {
            title: 'Puzzle Toys and Games',
          },
        ],
      },
      {
        title: 'Veterinary Care for Senior Pets',
        subchapters: [
          {
            title: 'Regular Check-ups and Screenings',
          },
          {
            title: 'Managing Chronic Conditions',
          },
          {
            title: 'Pain Management',
          },
        ],
      },
      {
        title: 'Creating a Comfortable Environment',
        subchapters: [
          {
            title: 'Adapting the Home for Senior Pets',
          },
          {
            title: 'Providing Warmth and Comfort',
          },
          {
            title: 'Mobility Assistance',
          },
        ],
      },
    ],
  },
];

/** 狗狗的飲食習慣 */
const dogEating: courseHierarchyType[] = [
  {
    tag: ['狗狗的飲食習慣'],
    title: '狗狗的飲食習慣指南',
    chapters: [
      {
        title: '基本的狗糧知識',
        subchapters: [
          {
            title: '選擇適合的狗糧品牌',
          },
          {
            title: '理解狗糧標籤',
          },
          {
            title: '確定適量的餵食量',
          },
        ],
      },
      {
        title: '飲食時間與頻率',
        subchapters: [
          {
            title: '建立固定的飲食時間',
          },
          {
            title: '適量的餵食頻率',
          },
          {
            title: '控制食物的放置時間',
          },
        ],
      },
      {
        title: '特殊飲食需求',
        subchapters: [
          {
            title: '適應特殊的飲食限制',
          },
          {
            title: '處理飲食敏感性',
          },
          {
            title: '考慮特殊飼食方式',
          },
        ],
      },
      {
        title: '餵食技巧與注意事項',
        subchapters: [
          {
            title: '使用合適的餵食器具',
          },
          {
            title: '鼓勵正確的進食姿勢',
          },
          {
            title: '確保飲食環境的清潔',
          },
        ],
      },
      {
        title: '處理飲食問題與挑食行為',
        subchapters: [
          {
            title: '處理食慾不振的情況',
          },
          {
            title: '解決選食或挑食的問題',
          },
          {
            title: '適應飲食轉換',
          },
        ],
      },
    ],
  },
];

/** 貓咪的飲食習慣 */
const catEating: courseHierarchyType[] = [
  {
    tag: ['貓咪的飲食習慣'],
    title: '貓咪的飲食習慣指南',
    chapters: [
      {
        title: '選擇適合的貓糧',
        subchapters: [
          {
            title: '了解貓糧的營養需求',
          },
          {
            title: '選擇適合年齡和體型的貓糧',
          },
          {
            title: '確保貓糧的品質與安全性',
          },
        ],
      },
      {
        title: '建立正確的餵食方式',
        subchapters: [
          {
            title: '設定固定的餵食時間',
          },
          {
            title: '控制餵食量與頻率',
          },
          {
            title: '適應貓咪的進食習慣',
          },
        ],
      },
      {
        title: '特殊飲食需求',
        subchapters: [
          {
            title: '處理特殊飲食限制或敏感性',
          },
          {
            title: '考慮特殊飼食方式（如生食餵養）',
          },
          {
            title: '控制貓咪的體重和飲食需求',
          },
        ],
      },
      {
        title: '餵食技巧與注意事項',
        subchapters: [
          {
            title: '選擇適合的餵食器具',
          },
          {
            title: '提供新鮮的食物和水源',
          },
          {
            title: '確保飲食環境的清潔',
          },
        ],
      },
      {
        title: '處理飲食問題與食慾不振',
        subchapters: [
          {
            title: '處理挑食或拒食的情況',
          },
          {
            title: '鼓勵貓咪的進食行為',
          },
          {
            title: '解決常見的飲食問題',
          },
        ],
      },
    ],
  },
];

/** 寵物生活品質提升 */
const qualityOfLifeForPets: courseHierarchyType[] = [
  {
    tag: ['寵物生活品質提升'],
    title: '提升寵物生活品質的指南',
    chapters: [
      {
        title: '提供舒適的生活環境',
        subchapters: [
          {
            title: '建立舒適的睡眠空間',
          },
          {
            title: '提供適當的運動空間',
          },
          {
            title: '創造安全的居家環境',
          },
        ],
      },
      {
        title: '促進寵物的身心健康',
        subchapters: [
          {
            title: '定期運動與活動',
          },
          {
            title: '提供適當的飲食與營養',
          },
          {
            title: '提供心理刺激與玩樂',
          },
        ],
      },
      {
        title: '建立穩定的日常生活',
        subchapters: [
          {
            title: '建立規律的日常作息',
          },
          {
            title: '提供安全的社交環境',
          },
          {
            title: '維持良好的衛生習慣',
          },
        ],
      },
      {
        title: '培養寵物與主人之間的互動',
        subchapters: [
          {
            title: '進行定期的互動與訓練',
          },
          {
            title: '建立信任與情感連結',
          },
          {
            title: '提供適度的社交活動',
          },
        ],
      },
      {
        title: '注意寵物的醫療保健',
        subchapters: [
          {
            title: '定期檢查與預防接種',
          },
          {
            title: '適時處理疾病與健康問題',
          },
          {
            title: '提供必要的醫療保健',
          },
        ],
      },
    ],
  },
];

const dogCovers: string[] = [
  'z/dog-golden-retriever-jumping-autumn-leaves-autumnal-sunlight-77861618.jpg',
  'z/dog-birthday-cake-cute-party-hat-99451144.jpg',
  'z/dog-love-rose-valentines-jack-russell-sticking-out-tongue-lying-bed-full-petals-as-background-day-wearing-78523443.jpg',
  'z/bad-dog-jumping-up-counter-stealing-thanksgiving-holiday-dinner-turkey-162970252.jpg',
  'z/dog-jumping-over-pool-water-29720697.jpg',
  'z/happy-dog-sticking-head-out-car-window-german-shepherd-mix-breed-hanging-his-tounge-his-mouth-as-sticks-his-56470336.jpg',
  'z/romantic-dog-text-happy-valentines-day-wooden-board-cute-hand-drawn-hearts-white-background-february-cute-138001610.jpg',
  'z/birthday-dog-balloons-cupcake-31795861.jpg',
  'z/cat-dog-sleeping-pets-sleeping-embracing-cat-dog-sleeping-115791204.jpg',
  'z/hunting-duck-dog-blind-29141083.jpg',
  'z/child-playing-dog-kids-play-puppy-child-playing-baby-dog-kids-play-puppy-little-boy-american-cocker-156181852.jpg',
  'z/cute-funny-dog-stucks-her-tongue-26778597.jpg',
];

const catCovers: string[] = [
  'z/little-cat-sleeping-pillow-red-heart-shaped-31132753.jpg',
  'z/blue-point-himalayan-cat-661234.jpg',
  'z/siberian-cat-front-white-background-22516973.jpg',
  'z/two-kittens-little-cat-listening-to-music-57512034.jpg',
  'z/cat-cats-kitty-feline-grey-tabby-pet-62551091.jpg',
  'z/sly-cat-sneaking-yard-fence-to-hunt-birds-stealthy-sly-house-cat-sneaking-yard-fence-to-101730616.jpg',
  'z/cat-looking-mirror-sees-itself-as-lion-self-esteem-desire-concept-cat-looking-mirror-sees-itself-as-lion-self-153795265.jpg',
  'z/cat-lying-floor-37057229.jpg',
  'z/smart-cat-writing-books-white-gray-holding-pencil-scribble-isolated-background-training-humor-43812948.jpg',
  'z/sleeping-cat-scottish-straight-31728508.jpg',
  'z/cat-box-22112343.jpg',
  'z/cat-nap-943400.jpg',
  'z/domestic-cat-17619649.jpg',
  'z/smiling-tabby-cat-17103169.jpg',
  'z/cat-looking-mirror-seeing-reflection-lion-isolated-white-59832435.jpg',
];

const petCovers = [
  'z/cat-dog-sleeping-puppy-kitten-sleep-together-taking-nap-home-pets-animal-care-love-friendship-domestic-animals-156181857.jpg',
  'z/dog-cat-11133177.jpg',
  'z/dog-cat-christmas-web-banner-cute-wearing-santa-claus-hats-tree-room-text-white-background-132155128.jpg',
  'z/cat-dog-christmas-basket-cat-dog-christmas-basket-tangerines-wine-isolated-white-105007421.jpg',
  'z/group-cat-dog-weimaraner-puppy-kitten-44857252.jpg',
  'z/cat-dog-love-2025305.jpg',
  'z/cat-dog-weimaraner-puppy-kitten-44348575.jpg',
  'z/cat-dog-together-close-up-lying-floor-50269744.jpg',
  'z/orange-cat-dog-looking-camera-isolated-white-bac-40402892.jpg',
  'z/portrait-cat-dog-astronauts-background-globe-elements-image-furnished-nasa-106197525.jpg',
  'z/cat-dog-guitars-cat-dog-guitars-isolated-white-background-189134240.jpg',
  'z/cat-dog-together-lying-white-background-animal-themes-150098957.jpg',
  'z/cat-dog-toothbrush-peeking-behind-empty-board-i-isolated-white-background-99186330.jpg',
  'z/cat-dog-under-christmas-tree-pets-plaid-105463936.jpg',
  'z/cat-dog-sits-white-background-cat-dog-together-sits-white-background-studio-shooting-113731316.jpg',
  'z/mixed-breed-cat-pug-red-bow-tie-sitting-maltese-dog-fro-front-white-background-129940127.jpg',
  'z/cat-dog-siberian-kitten-golden-retriever-together-dark-brown-background-93797966.jpg',
];

const fileNames: string[] = [
  '807306477?h=c67a24399e&app_id=122963',
  '807306201?h=7231d9a2da&app_id=122963',
  '192191?h=be09c77984&app_id=122963',
];

const courseHierarchys = {
  dogCovers,
  catCovers,
  petCovers,
  fileNames,
  dagData: [dogTrainings, dogBreeding, dogBreed, dogGames, dogHealthCheckTips, dogEating],
  catData: [
    catRecipes,
    catBehaviorTrainings,
    catFeeding,
    catBreed,
    catGames,
    catHealthCheckTips,
    catEating,
  ],
  petData: [
    petCommunications,
    petBaths,
    petHotelTrainings,
    handmadePetTreats,
    rabbitBreeding,
    petCareBasics,
    petNutrition,
    petHealthCare,
    petPsychology,
    petStressRelief,
    petBehaviorProblemSolving,
    petCommunication,
    petSafety,
    petGrooming,
    petTravel,
    petAgingCare,
    qualityOfLifeForPets,
  ],
};

const shortDescriptions = [
  `<p>在這堂課中，我們將介紹狗狗的基本養育需求，幫助您了解如何照顧一隻健康快樂的狗狗。</p>
<ul>
  <li>狗狗的飲食需求：選擇適合的狗糧種類和餵食方式。</li>
  <li>適合的住所環境：提供舒適的睡覺空間和適合運動的戶外區域。</li>
  <li>定期醫療護理：疫苗接種、定期驅蟲和常見疾病預防。</li>
  <li>適度的運動和遊戲：維持狗狗的身體健康和心理活躍。</li>
</ul>
<p>透過這些基本養育需求的認識，您將能夠提供一個健康快樂的生活環境給您的狗狗。</p>`,
  `<p>社交化是狗狗成長中極為重要的一部分，它可以幫助狗狗建立良好的社交技巧和行為。</p>
<ul>
  <li>與人類的社交化：如何讓狗狗適應不同人的接觸和互動。</li>
  <li>與其他狗狗的社交化：引導狗狗學習如何與其他狗狗相處和玩耍。</li>
  <li>社交化訓練技巧：使用正面強化法培養狗狗的良好行為。</li>
</ul>
<p>透過社交化訓練，您的狗狗將能夠在不同的社交場景中表現自信並與其他人和狗狗和睦相處。</p>`,
  `<ul>
  <li>坐下指令：教導狗狗在指令下坐下並保持姿勢。</li>
  <li>待命指令：讓狗狗學會在待命指令下停止動作並等待進一步指示。</li>
  <li>握手指令：培養狗狗與人互動時友善的握手行為。</li>
</ul>
<p>透過基本指令訓練，您將能夠與您的狗狗建立更緊密的關係，並提升您們之間的溝通效果。</p>`,
  `<p>尿布訓練是狗狗的基礎訓練之一，它可以幫助您的狗狗建立適當的排泄習慣。</p>
<ul>
  <li>選擇適合的尿布訓練方法：包括使用尿布墊片、尿布盆等不同方式。</li>
  <li>建立排泄地點：訓練狗狗在指定的區域內進行排泄。</li>
  <li>正確回饋和糾正方法：適時給予獎勵和糾正以加強尿布訓練效果。</li>
</ul>
<p>透過尿布訓練，您的狗狗將學會在指定的地點排泄，減少室內意外，並建立良好的衛生習慣。</p>`,
  `<p>在這堂課中，我們將分享一些基本的狗狗照顧技巧，讓您能夠更好地照顧和保護您的狗狗。</p>
<ul>
  <li>毛髮護理：適當的梳理和洗澡方法，以保持狗狗的毛髮乾淨和健康。</li>
  <li>耳朵和牙齒清潔：保持狗狗耳朵和牙齒的衛生，預防感染和口腔問題。</li>
  <li>安全和急救知識：了解常見的狗狗安全風險和基本的急救處理方法。</li>
</ul>
<p>透過這些基本的照顧技巧，您將成為一位優秀的狗狗主人，為您的狗狗提供最好的照顧。</p>`,
];

const descriptions = [
  '這堂課將教您如何建立與狗狗的良好關係，並訓練基本的指令。我們將探討正確的獎勵和糾正方法，幫助您培養狗狗的良好行為和禮儀。',
  '這堂課將教您如何幫助狗狗建立正確的社交技巧。我們將探討適應新環境、與其他狗狗和人互動的方法，讓您的狗狗成為社交得體的寵物。',
  '這堂課將教您如何選擇適合的狗糧，並提供營養均衡的飲食建議。我們將討論飲食需求、餵食時間和食物選擇，確保您的狗狗獲得健康的營養。',
  '這堂課將介紹適當的運動和活動方式，以保持狗狗的健康和活力。我們將討論適合不同品種和年齡的運動選項，並提供有趣的遊戲和訓練建議。',
  '這堂課將教您如何照顧狗狗的健康和護理需求。我們將探討常見的健康問題預防、疫苗接種和定期檢查的重要性，以確保您的狗狗保持健康和快樂。',
];

const instructors = [
  `<div>
  <h3>講師：Jane Smith</h3>
  <p>Jane Smith 是一位具有豐富經驗的狗狗訓練師和寵物行為專家。她在寵物訓練領域擁有超過十年的經驗，並且持有多項相關證書。她熱愛狗狗，並且致力於幫助狗主人建立和培養與狗狗之間的良好關係。</p>
  <p>在這堂課中，Jane將與您分享如何照顧和培養狗狗的基本需求。她擁有豐富的知識和技巧，能夠提供實用的建議和訓練方法，讓您成為一位優秀的狗狗主人。</p>
</div>`,
  `<div>
  <h3>講師：Michael Johnson</h3>
  <p>Michael Johnson 是一位專注於狗狗社交化訓練的專家。他擁有多年的狗狗訓練經驗，並且曾與各種品種的狗狗一起工作。他的熱情和耐心使他成為一位受歡迎的講師。</p>
  <p>在這堂課中，Michael將教授您如何幫助狗狗建立良好的社交技巧和行為。他將分享實用的訓練方法和技巧，讓您的狗狗能夠在各種社交場景中自信地表現。</p>
</div>`,
  `<div>
  <h3>講師：Sarah Thompson</h3>
  <p>Sarah Thompson 是一位專注於狗狗基本指令訓練的專家。她以其溫和且有效的訓練方法聞名，並且擁有協助許多狗狗主人建立良好關係的豐富經驗。</p>
  <p>在這堂課中，Sarah將教導您如何訓練狗狗基本的指令，並與您分享培養狗狗良好行為的技巧。她將提供個人化的建議，幫助您解決訓練中的困惑和挑戰。</p>
</div>`,
  `<div>
  <h3>講師：David Wilson</h3>
  <p>David Wilson 是一位尿布訓練專家，專注於幫助狗狗建立正確的排泄習慣。他擁有豐富的尿布訓練經驗，並且曾成功地幫助許多狗狗主人解決尿布訓練中的問題。</p>
  <p>在這堂課中，David將與您分享尿布訓練的技巧和方法，幫助您的狗狗建立適當的排泄習慣。他將解答您的問題，提供實用的建議，讓尿布訓練過程更順利。</p>
</div>`,
  `<div>
  <h3>講師：Emily Davis</h3>
  <p>Emily Davis 是一位寵物護理專家，擁有豐富的狗狗照顧經驗。她對狗狗的健康和福祉非常關注，並且擁有各種照顧技巧和知識。</p>
  <p>在這堂課中，Emily將與您分享基本的狗狗照顧技巧，包括毛髮護理、耳朵和牙齒清潔，以及常見的安全和急救知識。她將提供實用的建議，幫助您成為一位優秀的狗狗主人。</p>
</div>`,
];

export { courseHierarchys, courseHierarchyType, shortDescriptions, descriptions, instructors };
