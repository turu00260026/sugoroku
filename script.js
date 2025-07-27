// つづら折りルートのSVGパスデータ
const pathData = "M 50,550 L 750,550 L 750,450 L 50,450 L 50,350 L 750,350 L 750,250 L 50,250 L 50,150 L 750,150 L 750,50";

// 新しいイベントデータ（1〜100まで全て定義済み）
const eventsData = [
  null, // 0番目はダミー
  // --- 青年期 (1-35) ---
  /* 1 */ { type: 'NORMAL', description: '人生の旅が始まる！ 新生活への期待で胸がいっぱいだ。', effect: { happiness: 5 } },
  /* 2 */ { type: 'NORMAL', description: '近所を散策。新しい発見があった。', effect: { knowledge: 1 } },
  /* 3 */ { type: 'NORMAL', description: 'サークル活動に熱中！新しい友達ができた。', effect: { charm: 1, happiness: 1 } },
  /* 4 */ { type: 'NORMAL', description: 'アルバイトで初めての給料！', effect: { money: 10000 } },
  /* 5 */ { type: 'NORMAL', description: '話題の映画を見て感動。', effect: { happiness: 2 } },
  /* 6 */ { type: 'NORMAL', description: '資格取得の勉強を始めた。', effect: { money: -30000, knowledge: 2 } },
  /* 7 */ { type: 'NORMAL', description: 'スマホを落として画面がバキバキに…。', effect: { money: -20000, happiness: -2 } },
  /* 8 */ { type: 'NORMAL', description: '素敵な人との出会い。', effect: { charm: 1, happiness: 2 } },
  /* 9 */ { type: 'NORMAL', description: 'ボランティア活動に参加。社会貢献を実感。', effect: { happiness: 2 } },
  /* 10 */ { type: 'CHOICE_COURSE', description: '人生の分岐点！ どんな道を選ぶ？' }, // STOP
  /* 11 */ { type: 'OCCUPATION', courses: { company: { description: '初めての部署に配属。期待と不安でいっぱいだ。', effect: { happiness: 1 } }, freelance: { description: '活動用のPCや機材を揃えた。大きな投資だが、夢への第一歩だ。', effect: { money: -80000 } } } },
  /* 12 */ { type: 'OCCUPATION', courses: { company: { description: '上司に仕事を褒められた！', effect: { happiness: 2, knowledge: 1 } }, freelance: { description: 'SNSでの発信がバズった！', effect: { charm: 2, happiness: 1 } } } },
  /* 13 */ { type: 'NORMAL', description: '趣味に没頭してリフレッシュ。', effect: { happiness: 2 } },
  /* 14 */ { type: 'OCCUPATION', courses: { company: { description: '会社の飲み会。付き合いも大事だ。', effect: { money: -4000, charm: 1 } }, freelance: { description: '交流会に参加。新しい人脈ができた。', effect: { money: -3000, knowledge: 1 } } } },
  /* 15 */ { type: 'PAYDAY', courses: { company: { description: '初めての給料日！感動もひとしおだ。', effect: { money: 200000 } }, freelance: { description: '今月は順調に稼げた。', effect: { money: 180000 } } } },
  /* 16 */ { type: 'NORMAL', description: '健康診断で少し悪い結果が。生活改善を決意。', effect: { happiness: -1 } },
  /* 17 */ { type: 'NORMAL', description: '失恋した。心が痛む…。', effect: { happiness: -5, charm: 1 } },
  /* 18 */ { type: 'NORMAL', description: '自己投資として英会話を始めた。', effect: { money: -50000, knowledge: 3 } },
  /* 19 */ { type: 'OCCUPATION', courses: { company: { description: '初めての大きな失敗。しかし、良い経験になった。', effect: { happiness: -2, knowledge: 2 } }, freelance: { description: 'クライアントとの契約が打ち切りに。収入が不安定になる。', effect: { happiness: -3 } } } },
  /* 20 */ { type: 'NORMAL', description: '学生時代の友人と再会。思い出話に花が咲く。', effect: { happiness: 3 } },
  /* 21 */ { type: 'PAYDAY', courses: { company: { description: '給料日。少しだけ昇給した！', effect: { money: 220000 } }, freelance: { description: '今月は不調。節約生活を強いられる。', effect: { money: 80000 } } } },
  /* 22 */ { type: 'NORMAL', description: '親友の結婚式に出席。幸せな気持ちになった。', effect: { money: -30000, happiness: 5 } },
  /* 23 */ { type: 'OCCUPATION', courses: { company: { description: '有給休暇を取ってリフレッシュ旅行！', effect: { money: -50000, happiness: 7 } }, freelance: { description: '仕事の合間に休暇を取って旅行へ！自由な働き方の恩恵だ。', effect: { money: -40000, happiness: 6 } } } },
  /* 24 */ { type: 'NORMAL', description: '趣味のコンテストで入賞！', effect: { money: 10000, charm: 2, happiness: 3 } },
  /* 25 */ { type: 'NORMAL', description: '投資に挑戦してみた。', effect: { money: -30000, knowledge: 1 } },
  /* 26 */ { type: 'NORMAL', description: '新しい恋が始まった！', effect: { happiness: 10, charm: 1 } },
  /* 27 */ { type: 'RANDOM', description: '宝くじを買ってみた。結果は…', outcomes: [{ text: '大当たり！人生が変わる！', effect: { money: 1000000, happiness: 20 } }, { text: '少しだけ当たった。ラッキー！', effect: { money: 5000, happiness: 2 } }, { text: '残念、ハズレだった。', effect: { money: -300 } }] },
  /* 28 */ { type: 'NORMAL', description: '大好きなアーティストのライブに行った！', effect: { money: -8000, happiness: 6 } },
  /* 29 */ { type: 'OCCUPATION', courses: { company: { description: '会社の資格支援制度を利用してスキルアップ！', effect: { knowledge: 3, happiness: 1 } }, freelance: { description: '新しいスキルを独学で習得。仕事の幅が広がった。', effect: { knowledge: 3, happiness: 1 } } } },
  /* 30 */ { type: 'CHOICE_MARRIAGE', description: 'パートナーからプロポーズされた。どうする？' }, // STOP
  /* 31 */ { type: 'NORMAL', description: '新婚旅行で海外へ！', effect: { money: -200000, happiness: 15 } },
  /* 32 */ { type: 'PAYDAY', courses: { company: { description: '給料日。順調にキャリアを積んでいる。', effect: { money: 300000 } }, freelance: { description: '大型案件を受注！今月はかなり潤っている。', effect: { money: 500000 } } } },
  /* 33 */ { type: 'NORMAL', description: '車を購入した。行動範囲が広がる！', effect: { money: -200000, happiness: 5 } },
  /* 34 */ { type: 'OCCUPATION', courses: { company: { description: '部署異動。新しい環境で心機一転。', effect: { knowledge: 2, happiness: 1 } }, freelance: { description: '事務所を借りて活動を本格化。', effect: { money: -100000 } } } },
  /* 35 */ { type: 'CHOICE_BABY', description: '家族計画について考える時期が来た。' }, // STOP
  // --- 壮年期 (36-70) ---
  /* 36 */ { type: 'OCCUPATION', courses: { company: { description: 'ライバルとの出世競争に勝利！', effect: { money: 50000, happiness: 3 } }, freelance: { description: '業界のコンペで大きな賞を獲得！', effect: { money: 300000, charm: 5, happiness: 5 } } } },
  /* 37 */ { type: 'NORMAL', description: '親に旅行をプレゼントした。', effect: { money: -100000, happiness: 5 } },
  /* 38 */ { type: 'NORMAL', description: '人間ドックで健康の大切さを再認識。', effect: { happiness: 1 } },
  /* 39 */ { type: 'RANDOM', description: '投資の結果が出た！', outcomes: [{ text: '株価が暴騰！大儲け！', effect: { money: 500000, happiness: 10 } }, { text: '少し利益が出た。', effect: { money: 50000, happiness: 2 } }, { text: '塩漬けになってしまった…。', effect: { happiness: -2 } }] },
  /* 40 */ { type: 'PAYDAY', courses: { company: { description: '給料日。管理職に昇進した！', effect: { money: 450000, knowledge: 2 } }, freelance: { description: '法人化して会社を設立。事業が軌道に乗る。', effect: { money: 600000, knowledge: 3 } } } },
  /* 41 */ { type: 'NORMAL', description: '子供が生まれ、てんてこ舞いの日々。', effect: { happiness: 15, money: -20000 } },
  /* 42 */ { type: 'NORMAL', description: '友人とキャンプへ。自然に癒される。', effect: { happiness: 4 } },
  /* 43 */ { type: 'NORMAL', description: '急な出費。冠婚葬祭が重なる。', effect: { money: -50000, happiness: -1 } },
  /* 44 */ { type: 'OCCUPATION', courses: { company: { description: '部下の育成に悩む。', effect: { knowledge: 1, happiness: -1 } }, freelance: { description: '新しいビジネスチャンスを発見！', effect: { knowledge: 2 } } } },
  /* 45 */ { type: 'NORMAL', description: '家族サービスで遊園地へ。疲れたけど楽しかった。', effect: { money: -30000, happiness: 5 } },
  /* 46 */ { type: 'NORMAL', description: 'PCが壊れた！新しいのを購入。', effect: { money: -150000, happiness: -2 } },
  /* 47 */ { type: 'NORMAL', description: '近所付き合いも楽じゃない。', effect: { charm: 1, happiness: -1 } },
  /* 48 */ { type: 'NORMAL', description: '読書で知識を深める。', effect: { knowledge: 2 } },
  /* 49 */ { type: 'OCCUPATION', courses: { company: { description: '大きなプロジェクトが成功！ボーナスゲット！', effect: { money: 200000, happiness: 5 } }, freelance: { description: '自分の作品が出版されることに！', effect: { money: 250000, happiness: 10, charm: 3 } } } },
  /* 50 */ { type: 'CHOICE_HOUSE', description: 'そろそろマイホームを考える時期だ。' }, // STOP
  /* 51 */ { type: 'NORMAL', description: 'ローンの返済が始まる。', effect: { money: -50000 } },
  /* 52 */ { type: 'NORMAL', description: '新しい家具を揃える。', effect: { money: -100000, happiness: 3 } },
  /* 53 */ { type: 'NORMAL', description: '子供の運動会。我が子の成長に感動。', effect: { happiness: 8 } },
  /* 54 */ { type: 'NORMAL', description: '体重が増えてきた…。ジムに通い始める。', effect: { money: -10000, happiness: 1 } },
  /* 55 */ { type: 'PAYDAY', courses: { company: { description: '給料日。ベテランの域に達した。', effect: { money: 500000 } }, freelance: { description: '事業が安定。信頼できるスタッフに恵まれる。', effect: { money: 550000, happiness: 3 } } } },
  /* 56 */ { type: 'NORMAL', description: '車を買い替えた。', effect: { money: -1500000, happiness: 4 } },
  /* 57 */ { type: 'OCCUPATION', courses: { company: { description: '海外出張を命じられる。', effect: { knowledge: 2, happiness: 1 } }, freelance: { description: '海外のクライアントと取引開始！', effect: { knowledge: 2, happiness: 2 } } } },
  /* 58 */ { type: 'NORMAL', description: '家族旅行でハワイへ！', effect: { money: -500000, happiness: 12 } },
  /* 59 */ { type: 'NORMAL', description: '親の介護問題に直面する。', effect: { happiness: -3 } },
  /* 60 */ { type: 'RANDOM', description: '紛失した財布が見つかった！中身は…', outcomes: [{ text: '全額無事だった！警察に感謝！', effect: { happiness: 10 } }, { text: '現金は抜かれていた…。', effect: { money: -20000, happiness: -5 } }] },
  /* 61 */ { type: 'PAYDAY', courses: { company: { description: '給料日。', effect: { money: 500000 } }, freelance: { description: '今月も安定した収入。', effect: { money: 550000 } } } },
  /* 62 */ { type: 'NORMAL', description: '子供の進学。教育費がかさむ。', effect: { money: -300000 } },
  /* 63 */ { type: 'NORMAL', description: '趣味が高じて、個展を開くことに！', effect: { charm: 3, happiness: 10 } },
  /* 64 */ { type: 'NORMAL', description: '旧友が訪ねてきた。', effect: { happiness: 4 } },
  /* 65 */ { type: 'OCCUPATION', courses: { company: { description: '早期退職の募集。少し心が揺らぐ。', effect: { happiness: -1 } }, freelance: { description: '新しい技術を学んでスキルアップした。', effect: { knowledge: 3, happiness: 2 } } } },
  /* 66 */ { type: 'NORMAL', description: '芸術に触れて感性を磨く。', effect: { charm: 1 } },
  /* 67 */ { type: 'NORMAL', description: 'ぎっくり腰になってしまった。', effect: { happiness: -4 } },
  /* 68 */ { type: 'NORMAL', description: '庭いじりを始める。土に触れると落ち着く。', effect: { happiness: 3 } },
  /* 69 */ { type: 'NORMAL', description: '保険を見直す。将来に備える。', effect: { money: -5000, knowledge: 1 } },
  /* 70 */ { type: 'PAYDAY', courses: { company: { description: '給料日。', effect: { money: 500000 } }, freelance: { description: '今月も黒字だ。', effect: { money: 550000 } } } },
  // --- 老年期 (71-100) ---
  /* 71 */ { type: 'OCCUPATION', courses: { company: { description: '役職定年。給料は少し下がったが、責任も軽くなった。', effect: { money: 350000, happiness: 2 } }, freelance: { description: '事業を後進に任せ、顧問になった。悠々自適だ。', effect: { money: 300000, happiness: 5 } } } },
  /* 72 */ { type: 'NORMAL', description: '子供が独立。少し寂しいが、お祝いを渡す。', effect: { money: -200000, happiness: 10 } },
  /* 73 */ { type: 'OCCUPATION', courses: { company: { description: '長年の功績が認められ、会社から表彰された。', effect: { charm: 2, happiness: 5 } }, freelance: { description: '業界の発展に貢献し、生涯功労賞を受賞した。', effect: { charm: 3, happiness: 8 } } } },
  /* 74 */ { type: 'NORMAL', description: '孫が生まれた！目に入れても痛くない。', effect: { money: -100000, happiness: 20 } },
  /* 75 */ { type: 'NORMAL', description: 'ボランティア活動を始めた。新しい生きがいを見つける。', effect: { happiness: 5 } },
  /* 76 */ { type: 'NORMAL', description: '体力づくりにウォーキングを始めた。', effect: { happiness: 2 } },
  /* 77 */ { type: 'NORMAL', description: '最新の家電に買い替える。', effect: { money: -100000, happiness: 3 } },
  /* 78 */ { type: 'NORMAL', description: '夫婦水入らずで温泉旅行。', effect: { money: -80000, happiness: 10 } },
  /* 79 */ { type: 'NORMAL', description: 'ペットを飼い始めた。新しい家族が増える。', effect: { happiness: 12 } },
  /* 80 */ { type: 'NORMAL', description: '昔の夢だった世界一周旅行へ！', effect: { money: -1000000, knowledge: 5, happiness: 25 } },
  /* 81 */ { type: 'NORMAL', description: '地域のイベントに参加。', effect: { charm: 1 } },
  /* 82 */ { type: 'NORMAL', description: '孫の成長が何よりの楽しみ。', effect: { happiness: 10 } },
  /* 83 */ { type: 'NORMAL', description: '昔の趣味を再開する。', effect: { happiness: 4 } },
  /* 84 */ { type: 'NORMAL', description: 'NFT投資デビュー。デジタル時代の新しい投資に挑戦！', effect: { knowledge: 2, happiness: 2, money: -100000 } },
  /* 85 */ { type: 'NORMAL', description: '旧友と再会。思い出は色褪せない。', effect: { happiness: 10 } },
  /* 86 */ { type: 'NORMAL', description: '健康食品にハマる。', effect: { money: -20000, happiness: 1 } },
  /* 87 */ { type: 'NORMAL', description: '資産運用について学ぶ。', effect: { knowledge: 2 } },
  /* 88 */ { type: 'NORMAL', description: '断捨離で家がスッキリ。', effect: { happiness: 3 } },
  /* 89 */ { type: 'NORMAL', description: 'お気に入りのカフェを見つける。', effect: { happiness: 2 } },
  /* 90 */ { type: 'NORMAL', description: 'これまでの人生を振り返り、自叙伝を執筆した。', effect: { knowledge: 3, happiness: 5 } },
  /* 91 */ { type: 'NORMAL', description: '孫にお小遣いをあげる。', effect: { money: -10000, happiness: 5 } },
  /* 92 */ { type: 'NORMAL', description: '最新の医療ドラマに夢中になる。', effect: { happiness: 1 } },
  /* 93 */ { type: 'NORMAL', description: '近所の子供たちに昔の遊びを教える。', effect: { charm: 1, happiness: 3 } },
  /* 94 */ { type: 'NORMAL', description: '退職金と年金のことを考える。', effect: { knowledge: 1 } },
  /* 95 */ { type: 'NORMAL', description: '穏やかな日々。何気ない日常が一番の幸せかもしれない。', effect: { happiness: 5 } },
  /* 96 */ { type: 'NORMAL', description: 'パートナーに感謝を伝える。', effect: { happiness: 10 } },
  /* 97 */ { type: 'NORMAL', description: 'アルバムを整理。思い出に浸る。', effect: { happiness: 5 } },
  /* 98 */ { type: 'NORMAL', description: '今日は一日、何もしない贅沢。', effect: { happiness: 2 } },
  /* 99 */ { type: 'NORMAL', description: '人生はまだまだこれからだ！', effect: { happiness: 3 } },
  /* 100 */{ type: 'GOAL', description: 'ついにゴール！波乱万丈の人生、お疲れ様でした。' }
];

// ゲーム状態
let currentPosition = 1;
let squarePositions = []; // 各マスの座標を保存する配列
let playerGender = null; // プレイヤーの性別
let isWaitingForReset = false; // 針のリセット待ち状態
let pendingKeyHandler = null; // 保留中のキーハンドラー

// プレイヤー情報
let player = {
  position: 1,
  gender: null,
  course: null,
  money: 10000,
  knowledge: 5,
  charm: 5,
  happiness: 10,
  age: 18,
  career_path: null, // 'high_school', 'college', 'university'
  is_student: false, // 学生か社会人か
  base_salary: 0, // 基本給
  job_start_age: 0, // 就職した年齢
  job_changed_at_25: false, // 転職フラグ
  job_changed_at_30: false,
  job_changed_at_35: false,
  job_changed_at_40: false,
  job_changed_at_50: false,
  work_style: null, // 'employee' または 'freelance'
  freelance_start_turn: 0, // フリーランス開始ターン（5ターン50%報酬用）
  current_turn: 0, // 現在のターン数
  marriage_proposals_received: 0, // 結婚の提案を受けた回数（30歳、38歳）
  is_married: false, // 結婚しているかどうか
  marriage_age: 0, // 結婚した年齢
  has_children: false, // 子どもがいるかどうか
  number_of_children: 0, // 子どもの数
  is_divorced: false, // 離婚したかどうか
  has_divorced: false, // 離婚経験があるかどうか
  divorce_age: 0, // 離婚した年齢
  divorce_proposals_received: 0, // 離婚の提案を受けた回数（45歳、58歳）
  is_retired: false, // 退職したかどうか
  role_retirement_age: 0, // 役職定年を迎えた年齢
  business_success_at_45: false, // 45歳で事業成功イベントを受けたかどうか
  business_success_at_53: false, // 53歳で事業成功イベントを受けたかどうか
  business_success: false, // 事業成功したかどうか（45歳または53歳）
  has_house: false, // 家を購入したかどうか
  has_grandchildren: false, // 孫がいるかどうか
  job_changes: 0, // 転職回数
  course_changes: 0 // コース変更回数（会社員⇔フリーランス）
};

// DOM要素の取得
const svg = document.getElementById('board-svg');
const playerPawn = document.getElementById('player-pawn');
const rollDiceBtn = document.getElementById('roll-dice');
const diceResult = document.getElementById('dice-result');
const currentPositionSpan = document.getElementById('current-position');
const playerAgeSpan = document.getElementById('player-age');
const titleScreenModal = document.getElementById('title-screen-modal');
const startGameBtn = document.getElementById('start-game-btn');
const characterModal = document.getElementById('character-select-modal');
const charSelectBtns = document.querySelectorAll('.char-select-btn');
const rouletteNeedle = document.getElementById('roulette-needle');
const eventModal = document.getElementById('event-modal');
const eventMessage = document.getElementById('event-message');
const eventEffect = document.getElementById('event-effect');
const eventOkBtn = document.getElementById('event-ok-btn');
const courseSelectModal = document.getElementById('course-select-modal');
const courseSelectTitle = document.getElementById('course-select-title');
const courseOptions = document.getElementById('course-options');
const careerStartModal = document.getElementById('career-start-modal');
const careerStartOptions = document.getElementById('career-start-options');
const jobChangeModal = document.getElementById('job-change-modal');
const jobChangeOptions = document.getElementById('job-change-options');
const marriageModal = document.getElementById('marriage-modal');
const marriageOptions = document.getElementById('marriage-options');
const divorceModal = document.getElementById('divorce-modal');
const divorceOptions = document.getElementById('divorce-options');
const careerChangeModal = document.getElementById('career-change-modal');
const careerChangeOptions = document.getElementById('career-change-options');
const businessExpansionModal = document.getElementById('business-expansion-modal');
const businessExpansionOptions = document.getElementById('business-expansion-options');

// ページ読み込み時の初期化
document.addEventListener('DOMContentLoaded', function() {
    showCharacterSelectModal();
    setupCharacterSelection();
    setupCareerSelection();
    setupJobChangeSelection();
    setupMarriageSelection();
    setupDivorceSelection();
    setupCareerChangeSelection();
    setupEventHandlers();
});

// ゲーム盤面の初期化
function initializeGameBoard() {
    // SVGのviewBoxを固定サイズ（800x600）に設定して、CSSでスケーリング
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.setAttribute('viewBox', '0 0 800 600');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    
    // SVGで道を描画
    const gamePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gamePath.setAttribute('id', 'game-path');
    gamePath.setAttribute('d', pathData);
    svg.appendChild(gamePath);
    
    // 道の分割とマス情報の生成
    generateSquares(gamePath);
    
    // 初期プレイヤー位置を設定
    setTimeout(() => {
        updatePlayerPosition();
    }, 100);
    
    // ウィンドウサイズ変更時にプレイヤー位置を再調整
    window.addEventListener('resize', adjustPlayerPosition);
}

// プレイヤー位置の調整
function adjustPlayerPosition() {
    // プレイヤーの位置を現在の位置で更新
    setTimeout(() => {
        updatePlayerPosition();
    }, 100);
}

// 道の分割とマス情報の生成
function generateSquares(pathElement) {
    const totalLength = pathElement.getTotalLength();
    const squareLength = totalLength / 100; // 100マスに分割
    
    // 各マスの座標を計算し、区切り線とマス番号を描画
    for (let i = 1; i <= 100; i++) {
        const distance = (i - 1) * squareLength;
        const point = pathElement.getPointAtLength(distance);
        
        // 座標を配列に保存
        squarePositions[i] = {
            x: point.x,
            y: point.y
        };
        
        // 区切り線の描画（マス番号が5の倍数の場合のみ）
        if (i % 5 === 0 && i < 100) {
            drawDividerLine(pathElement, distance);
        }
        
        // マス番号の描画（10の倍数の場合のみ）
        if (i % 10 === 0 || i === 1) {
            drawSquareNumber(point.x, point.y, i);
        }
    }
}

// 区切り線の描画
function drawDividerLine(pathElement, distance) {
    const point = pathElement.getPointAtLength(distance);
    const nextPoint = pathElement.getPointAtLength(distance + 1);
    
    // 道の方向を計算
    const dx = nextPoint.x - point.x;
    const dy = nextPoint.y - point.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    
    if (length > 0) {
        // 道に垂直な線を計算
        const perpX = -dy / length * 15; // 線の長さ
        const perpY = dx / length * 15;
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', point.x + perpX);
        line.setAttribute('y1', point.y + perpY);
        line.setAttribute('x2', point.x - perpX);
        line.setAttribute('y2', point.y - perpY);
        svg.appendChild(line);
    }
}

// マス番号の描画
function drawSquareNumber(x, y, number) {
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y);
    text.textContent = number;
    svg.appendChild(text);
}

// プレイヤーの位置を更新
function updatePlayerPosition() {
    if (squarePositions[currentPosition]) {
        const pos = squarePositions[currentPosition];
        const gameBoard = document.getElementById('game-board');
        const boardRect = gameBoard.getBoundingClientRect();
        
        // SVGの実際のサイズとviewBoxサイズの比率を計算
        const scaleX = boardRect.width / 800;  // 800はviewBoxの幅
        const scaleY = boardRect.height / 600; // 600はviewBoxの高さ
        
        // プレイヤーのサイズを取得（スマホ対応で動的に変わる）
        const computedStyle = window.getComputedStyle(playerPawn);
        const playerWidth = parseInt(computedStyle.width) || 160; // デフォルト160px
        const playerHeight = parseInt(computedStyle.height) || 160;
        
        // スケールされた位置を計算
        const scaledX = pos.x * scaleX;
        const scaledY = pos.y * scaleY;
        
        // プレイヤーを中央に配置
        playerPawn.style.left = (scaledX - playerWidth / 2) + 'px';
        playerPawn.style.top = (scaledY - playerHeight / 2) + 'px';
        
        currentPositionSpan.textContent = currentPosition;
        updatePlayerInfo(); // プレイヤー情報も更新
    }
}

// 年齢表示を更新
function updatePlayerAge() {
    if (playerAgeSpan) {
        playerAgeSpan.textContent = player.age;
    }
}

// 給与処理（毎ターン）
function processSalary() {
    if (player.is_student || player.base_salary <= 0) {
        return; // 学生または無職の場合は給与なし
    }
    
    // 会社員が退職している場合は給与なし
    if (player.work_style === 'employee' && player.is_retired) {
        return;
    }
    
    // 勤務年数計算
    const yearsWorked = Math.max(0, player.age - player.job_start_age);
    
    // 会社員の場合、役職定年後は昇給停止
    let salary_increases = 0;
    if (player.work_style === 'employee' && player.role_retirement_age > 0) {
        // 役職定年時点での昇給額で固定
        const yearsUntilRoleRetirement = Math.max(0, player.role_retirement_age - player.job_start_age);
        salary_increases = Math.floor(yearsUntilRoleRetirement / 2) * 10000;
    } else {
        // 通常の昇給計算
        salary_increases = Math.floor(yearsWorked / 2) * 10000;
    }
    
    let current_salary = player.base_salary + salary_increases;
    
    // フリーランス・起業コースの特別処理
    let salaryInfo = '';
    if (player.work_style === 'freelance') {
        const turnsFromStart = player.current_turn - player.freelance_start_turn + 1;
        console.log(`フリーランス給与計算: current_turn=${player.current_turn}, freelance_start_turn=${player.freelance_start_turn}, turnsFromStart=${turnsFromStart}`);
        if (player.current_turn >= player.freelance_start_turn && turnsFromStart >= 1 && turnsFromStart <= 5) {
            // 最初の5ターンは50%の報酬（1〜5ターン目）
            current_salary = Math.floor(current_salary * 0.5);
            salaryInfo = `（起業${turnsFromStart}ターン目・報酬50%）`;
            console.log(`報酬50%適用: 元${player.base_salary + salary_increases} → ${current_salary}`);
        } else if (player.current_turn >= player.freelance_start_turn && turnsFromStart > 5) {
            salaryInfo = '（起業・安定期）';
        } else {
            salaryInfo = '（起業準備中）';
            console.log('フリーランス準備中のため通常給与');
        }
    } else {
        // 会社員の場合
        let baseInfo = '';
        switch(player.career_path) {
            case 'high_school': baseInfo = '（高卒・会社員'; break;
            case 'college': baseInfo = '（専門卒・会社員'; break;
            case 'university': baseInfo = '（大卒・会社員'; break;
            default: baseInfo = '（会社員';
        }
        
        if (player.role_retirement_age > 0) {
            salaryInfo = baseInfo + '・役職定年後）';
        } else {
            salaryInfo = baseInfo + '）';
        }
    }
    
    const calculationType = player.work_style === 'freelance' ? '報酬計算' : '給与計算';
    const finalLabel = player.work_style === 'freelance' ? '最終報酬' : '最終給与';
    console.log(`${calculationType}: 年齢${player.age}歳, 勤務${yearsWorked}年, 基本給¥${player.base_salary}, 昇給¥${salary_increases}, ${finalLabel}¥${current_salary}`);
    
    // 生活費計算（収入の8割）
    const livingCost = Math.floor(current_salary * 0.8);
    const netIncome = current_salary - livingCost;
    
    // 収入を追加してから生活費を差し引く
    player.money += current_salary;
    player.money -= livingCost;
    
    // 収支情報をグローバル変数に保存（後でイベント表示時に使用）
    const incomeLabel = player.work_style === 'freelance' ? '報酬' : '給与';
    window.currentFinanceInfo = {
        income: current_salary,
        livingCost: livingCost,
        netIncome: netIncome,
        incomeLabel: incomeLabel,
        salaryInfo: salaryInfo
    };
    
    // プレイヤー情報を更新
    updatePlayerInfo();
}

// 学生の生活費処理（毎ターン）
function processStudentLivingCost() {
    // 学生の基本生活費（月10万円程度）
    const studentLivingCost = 100000;
    
    // 生活費を差し引く
    player.money -= studentLivingCost;
    
    // 学生の収支情報をグローバル変数に保存
    window.currentFinanceInfo = {
        income: 0,
        livingCost: studentLivingCost,
        netIncome: -studentLivingCost,
        incomeLabel: '学生',
        salaryInfo: ''
    };
    
    // プレイヤー情報を更新
    updatePlayerInfo();
}

// 退職者の年金処理（毎ターン）
function processPension() {
    // 年金収入（月15万円）
    const pensionIncome = 150000;
    // 退職者の基本生活費（月12万円程度）
    const retiredLivingCost = 120000;
    const netIncome = pensionIncome - retiredLivingCost;
    
    // 年金収入を追加
    player.money += pensionIncome;
    // 生活費を差し引く
    player.money -= retiredLivingCost;
    
    // 退職者の収支情報をグローバル変数に保存
    window.currentFinanceInfo = {
        income: pensionIncome,
        livingCost: retiredLivingCost,
        netIncome: netIncome,
        incomeLabel: '年金',
        salaryInfo: ''
    };
    
    // プレイヤー情報を更新
    updatePlayerInfo();
}

// 性別選択モーダルを表示
function showCharacterSelectModal() {
    characterModal.style.display = 'flex';
}

// 性別選択モーダルを非表示
function hideCharacterSelectModal() {
    characterModal.style.display = 'none';
}

// 性別選択の設定
function setupCharacterSelection() {
    charSelectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedGender = this.getAttribute('data-gender');
            playerGender = selectedGender;
            
            // プレイヤーのコマ画像を変更
            const playerImg = playerPawn.querySelector('img');
            if (selectedGender === 'male') {
                playerImg.src = 'images/malemae.png';
            } else {
                playerImg.src = 'images/femalemae.png';
            }
            
            // プレイヤー情報を更新
            player.gender = selectedGender;
            
            // モーダルを非表示にして進路選択モーダルを表示
            hideCharacterSelectModal();
            showCareerStartModal();
        });
    });
}

// 進路選択モーダルを表示
function showCareerStartModal() {
    careerStartModal.style.display = 'flex';
}

// 進路選択モーダルを非表示
function hideCareerStartModal() {
    careerStartModal.style.display = 'none';
}

// 進路選択の設定
function setupCareerSelection() {
    careerStartOptions.addEventListener('click', function(e) {
        if (e.target.dataset.career) {
            const selectedCareer = e.target.dataset.career;
            player.career_path = selectedCareer;
            
            // 進路に応じて設定
            switch (selectedCareer) {
                case 'high_school':
                    player.is_student = false;
                    player.job_start_age = 18;
                    player.base_salary = 180000;
                    player.work_style = 'employee';
                    player.course = 'company';
                    break;
                case 'college':
                    player.is_student = true;
                    player.job_start_age = 20;
                    player.base_salary = 200000;
                    break;
                case 'university':
                    player.is_student = true;
                    player.job_start_age = 22;
                    player.base_salary = 240000;
                    break;
            }
            
            // モーダルを非表示にしてゲーム開始
            hideCareerStartModal();
            initializeGameBoard();
            updatePlayerPosition();
        }
    });
}

// 転職確認モーダルを表示
function showJobChangeModal() {
    // 働き方に関係なく、統一された転職確認メッセージを表示
    const modalTitle = jobChangeModal.querySelector('h2');
    const yesButton = jobChangeModal.querySelector('[data-choice="yes"]');
    const noButton = jobChangeModal.querySelector('[data-choice="no"]');
    
    modalTitle.textContent = '転機の年齢だ。転職に挑戦する？';
    yesButton.textContent = 'はい、挑戦する';
    noButton.textContent = 'いいえ、今の仕事を続ける';
    
    jobChangeModal.style.display = 'flex';
}

// 転職確認モーダルを非表示
function hideJobChangeModal() {
    jobChangeModal.style.display = 'none';
}

// 転職選択の設定
function setupJobChangeSelection() {
    jobChangeOptions.addEventListener('click', function(e) {
        console.log('転職オプションがクリックされました:', e.target);
        console.log('data-choice:', e.target.dataset.choice);
        
        if (e.target.dataset.choice) {
            const choice = e.target.dataset.choice;
            console.log('選択された転職オプション:', choice);
            
            hideJobChangeModal();
            
            if (choice === 'yes') {
                // 転職挑戦する場合、転職先選択モーダルを表示
                setTimeout(() => {
                    showCareerChangeModal();
                }, 100);
            } else {
                // 転職しない場合の処理
                setTimeout(() => {
                    if (player.work_style === 'freelance') {
                        showEventMessage('現在の事業を続けることにした。', player.age, { happiness: 1 });
                    } else {
                        showEventMessage('現在の職場で頑張ることにした。', player.age, { happiness: 1 });
                    }
                }, 100);
            }
        }
    });
}

// 転職先選択モーダルを表示
function showCareerChangeModal() {
    // 現在の働き方に応じて選択肢のテキストを調整
    const companyButton = careerChangeModal.querySelector('[data-career-change="company"]');
    const freelanceButton = careerChangeModal.querySelector('[data-career-change="freelance"]');
    
    if (player.work_style === 'freelance') {
        companyButton.textContent = '企業に転職する';
        freelanceButton.textContent = '引き続きがんばる';
    } else {
        companyButton.textContent = '別の企業に転職する';
        freelanceButton.textContent = 'フリーランス・起業に転身する';
    }
    
    careerChangeModal.style.display = 'flex';
}

// 転職先選択モーダルを非表示
function hideCareerChangeModal() {
    careerChangeModal.style.display = 'none';
}

// 転職先選択の設定
function setupCareerChangeSelection() {
    careerChangeOptions.addEventListener('click', function(e) {
        console.log('転職先オプションがクリックされました:', e.target);
        console.log('data-career-change:', e.target.dataset.careerChange);
        
        if (e.target.dataset.careerChange) {
            const careerChoice = e.target.dataset.careerChange;
            const oldWorkStyle = player.work_style;
            console.log('選択された転職先:', careerChoice, '現在の働き方:', oldWorkStyle);
            
            hideCareerChangeModal();
            
            // 転職パターンによって処理を分岐
            if (oldWorkStyle === 'employee' && careerChoice === 'company') {
                // 会社員 → 別の企業への転職（50%確率で給与UP/DOWN）
                const success = Math.random() < 0.5;
                player.job_changes++;
                
                setTimeout(() => {
                    if (success) {
                        player.base_salary = Math.floor(player.base_salary * 1.2);
                        showEventMessage('転職成功！給与が20%アップした！', player.age, { happiness: 5 });
                    } else {
                        player.base_salary = Math.floor(player.base_salary * 0.8);
                        showEventMessage('転職は厳しい結果に…給与が20%ダウンした。', player.age, { happiness: -3 });
                    }
                }, 100);
                
            } else if (oldWorkStyle === 'employee' && careerChoice === 'freelance') {
                // 会社員 → フリーランス（必ず成功、5ターン50%OFF）
                player.job_changes++;
                player.course_changes++;
                player.work_style = 'freelance';
                player.course = 'freelance';
                player.freelance_start_turn = player.current_turn + 2;
                
                setTimeout(() => {
                    showEventMessage('フリーランス・起業への転身成功！自由度が高まった！最初の5ターンは報酬50%OFF！', player.age, { happiness: 5 });
                }, 100);
                console.log(`フリーランス転職成功: freelance_start_turn=${player.freelance_start_turn}, current_turn=${player.current_turn}`);
                
            } else if (oldWorkStyle === 'freelance' && careerChoice === 'company') {
                // フリーランス → 企業転職（50%確率で給与UP/DOWN）
                const success = Math.random() < 0.5;
                player.job_changes++;
                
                if (success) {
                    player.course_changes++;
                    player.work_style = 'employee';
                    player.course = 'company';
                    player.job_start_age = player.age;
                    player.base_salary = Math.floor(player.base_salary * 1.2);
                    
                    setTimeout(() => {
                        showEventMessage('企業への転職成功！安定した給与が得られるようになった！給与が20%アップした！', player.age, { happiness: 5 });
                    }, 100);
                } else {
                    player.base_salary = Math.floor(player.base_salary * 0.8);
                    setTimeout(() => {
                        showEventMessage('企業への転職は厳しい結果に…現在の事業で報酬が20%ダウンした。', player.age, { happiness: -3 });
                    }, 100);
                }
                
            } else if (oldWorkStyle === 'freelance' && careerChoice === 'freelance') {
                // フリーランス → フリーランス継続
                setTimeout(() => {
                    showEventMessage('フリーランスで引き続きがんばることにした！', player.age, { happiness: 2 });
                }, 100);
            }
        }
    });
}

// ルーレット（1-5）を回す
rollDiceBtn.addEventListener('click', function() {
    // リセット待ち状態の場合はリセット処理を実行
    if (isWaitingForReset) {
        resetNeedleAndContinue();
        return;
    }
    
    rollDiceBtn.disabled = true;
    diceResult.textContent = '';
    
    // 最終結果を決定（1-5）
    const finalResult = Math.floor(Math.random() * 5) + 1;
    
    // 針の最終回転角度を計算（各数字は72度間隔、時計回り）
    const baseRotation = 1800; // 5回転
    const finalAngle = (finalResult - 1) * 72; // 数字1が0度、2が72度...
    const totalRotation = baseRotation + finalAngle;
    
    // CSS変数に最終回転角度を設定
    rouletteNeedle.style.setProperty('--final-rotation', `${totalRotation}deg`);
    
    // 回転アニメーションを開始
    rouletteNeedle.classList.add('spinning');
    
    // アニメーション完了後の処理
    setTimeout(() => {
        // アニメーションクラスを削除せずに、アニメーション終了位置を維持
        rouletteNeedle.classList.remove('spinning');
        // 明示的に最終位置を設定
        rouletteNeedle.style.transform = `translateX(-50%) rotate(${totalRotation}deg)`;
        
        // 結果を表示
        diceResult.textContent = `${finalResult}が出ました！ (キーを押すかもう一度ボタンを押してください)`;
        
        // リセット待ち状態に設定
        isWaitingForReset = true;
        rollDiceBtn.disabled = false;
        rollDiceBtn.textContent = '針をリセット';
        
        // キー押下で針を戻す処理
        const handleKeyPress = () => {
            resetNeedleAndContinue();
        };
        
        // 保留中のハンドラーがあれば削除
        if (pendingKeyHandler) {
            document.removeEventListener('keydown', pendingKeyHandler);
        }
        
        // キーボードイベントリスナーを追加
        pendingKeyHandler = handleKeyPress;
        document.addEventListener('keydown', handleKeyPress);
        
        // 内部関数でリセット処理
        function resetNeedleAndContinue() {
            // 針を元の位置（1の位置）にスムーズに戻す
            rouletteNeedle.style.transition = 'transform 0.5s ease';
            rouletteNeedle.style.transform = 'translateX(-50%) rotate(0deg)';
            
            // プレイヤーを移動
            movePlayer(finalResult);
            
            // 結果表示を更新
            diceResult.textContent = `${finalResult}が出ました！`;
            
            // イベントリスナーを削除
            if (pendingKeyHandler) {
                document.removeEventListener('keydown', pendingKeyHandler);
                pendingKeyHandler = null;
            }
            
            // 状態をリセット
            isWaitingForReset = false;
            rollDiceBtn.textContent = 'ルーレットを回す';
            
            // ボタンを再有効化とtransitionをリセット
            setTimeout(() => {
                rouletteNeedle.style.transition = 'transform 0.1s ease';
                rollDiceBtn.disabled = false;
            }, 500);
        }
        
        // 関数を外部からアクセス可能にする
        window.resetNeedleAndContinue = resetNeedleAndContinue;
    }, 3000); // アニメーション時間と合わせる
});

// プレイヤーの移動
function movePlayer(steps) {
    const newPosition = Math.min(currentPosition + steps, 100);
    
    if (newPosition !== currentPosition) {
        currentPosition = newPosition;
        player.position = currentPosition;
        player.current_turn++; // ターン数を増加
        
        // 年齢の更新
        player.age = 18 + Math.floor(player.position / 2);
        
        updatePlayerPosition();
        updatePlayerAge();
        
        // 毎ターン給与処理（社会人の場合）
        if (!player.is_student && player.base_salary > 0) {
            processSalary();
        }
        
        // 学生の場合も生活費処理
        if (player.is_student) {
            processStudentLivingCost();
        }
        
        // 退職者の場合の年金処理
        if (player.work_style === 'employee' && player.is_retired) {
            processPension();
        }
        
        // 移動完了後にイベントをトリガー
        setTimeout(() => {
            const hasEvent = eventsData[currentPosition] !== null && eventsData[currentPosition] !== undefined;
            triggerEvent(currentPosition);
            
            // イベントがない場合のみ、収支情報を単独で表示
            if (!hasEvent) {
                setTimeout(() => {
                    if (window.currentFinanceInfo) {
                        const finance = window.currentFinanceInfo;
                        if (finance.incomeLabel === '学生') {
                            showEventMessage('今月の生活費', player.age, {});
                        } else if (finance.incomeLabel === '年金') {
                            showEventMessage('今月の年金収支', player.age, {});
                        } else {
                            showEventMessage('今月の収支', player.age, {});
                        }
                    }
                }, 200);
            }
        }, 500);
        
        // ゴール判定は triggerEvent で GOAL タイプとして処理される
    }
}

// イベント処理の中心となる関数
function triggerEvent(position) {
    // 100マス目に到達した場合は最終ステータス表示へ
    if (position === 100) {
        setTimeout(() => {
            showFinalStatusModal();
        }, 500);
        return;
    }
    
    // 学生期間の就職処理
    if (player.is_student && player.age >= player.job_start_age) {
        player.is_student = false;
        // 初回就職時はデフォルトで会社員コースに設定
        if (!player.work_style) {
            player.work_style = 'employee';
            player.course = 'company';
        }
        setTimeout(() => {
            showEventMessage('祝！就職しました！社会人としての新しい人生がスタート！', player.age, { happiness: 10 });
        }, 100);
        return;
    }
    
    // 転職イベントチェック
    console.log(`転職イベントチェック: position=${position}, age=${player.age}`);
    if (checkJobChangeEvent()) {
        console.log('転職イベント発生により、マスイベント処理をスキップ');
        return; // 転職イベントが発生した場合はここで終了
    }
    
    // 結婚イベントチェック（30歳で必ず発生）
    if (player.age === 30 && !player.is_married && !player.has_divorced && player.marriage_proposals_received === 0) {
        console.log('30歳で結婚イベント発生');
        player.marriage_proposals_received++;
        showMarriageModal();
        return; // イベントが発生した場合はここで終了
    }
    
    // 離婚イベントチェック
    if (checkDivorceEvent()) {
        return; // 離婚イベントが発生した場合はここで終了
    }
    
    // 子どもが生まれるイベントチェック
    if (checkChildBirthEvent()) {
        return; // 子どもが生まれるイベントが発生した場合はここで終了
    }
    
    // 役職定年イベントチェック（会社員の55歳）
    if (checkRoleRetirementEvent()) {
        return; // 役職定年イベントが発生した場合はここで終了
    }
    
    // 退職イベントチェック（会社員の65歳）
    if (checkRetirementEvent()) {
        return; // 退職イベントが発生した場合はここで終了
    }
    
    // 事業成功イベントチェック（フリーランス・起業の45歳、53歳）
    const businessEventOccurred = checkBusinessSuccessEvent();
    console.log(`事業成功イベントチェック結果: ${businessEventOccurred}, 年齢: ${player.age}, 働き方: ${player.work_style}`);
    if (businessEventOccurred) {
        console.log('事業成功イベントが発生したため、以降の処理をスキップ');
        return; // 事業成功イベントが発生した場合はここで終了
    }
    
    // 孫誕生イベントチェック
    if (checkGrandchildBirthEvent()) {
        return; // 孫誕生イベントが発生した場合はここで終了
    }
    
    const eventData = eventsData[position];
    
    if (!eventData) {
        // 定義されていないマスは何もしない
        return;
    }
    
    // 条件付きイベントのチェック（条件を満たしていない場合は別のイベントに変更）
    if (isConditionalEvent(position) && !meetsEventConditions(position)) {
        // 条件を満たしていない場合は代替イベントを表示
        showAlternativeEvent(position);
        return;
    }
    
    switch (eventData.type) {
        case 'NORMAL':
            console.log(`NORMAL イベント処理: position=${position}, description=${eventData.description}`);
            showEventModal(eventData.description, eventData.effect, eventData.age);
            break;
            
        case 'CHOICE_COURSE':
            showCourseSelectModal(eventData.description, eventData.age);
            break;
            
        case 'OCCUPATION':
            // コース別イベントがある場合はそれを使用
            if (eventData.courses && (player.course === 'company' || player.course === 'freelance')) {
                const courseData = eventData.courses[player.course];
                if (courseData) {
                    showEventModal(courseData.description, courseData.effect, eventData.age);
                    break;
                }
            }
            
            // 通常のOCCUPATION処理（コース別データがない場合）
            if (player.is_student) {
                // 学生の場合はアルバイトイベント
                const earnings = Math.floor(Math.random() * 30000) + 10000; // 1-4万円
                showEventMessage(`アルバイトで¥${earnings.toLocaleString()}稼いだ！（臨時収入）`, player.age, { money: earnings });
            } else {
                // 就職後は副業イベント（確率30%で発生）
                const sideJobChance = Math.random();
                if (sideJobChance < 0.3) {
                    const sideJobEarnings = Math.floor(Math.random() * 50000) + 20000; // 2-7万円
                    showEventMessage(`副業で¥${sideJobEarnings.toLocaleString()}稼いだ！（臨時収入）`, player.age, { money: sideJobEarnings });
                } else {
                    // 通常の職業イベント（働き方に応じて異なるイベント）
                    let workEvents;
                    
                    if (player.work_style === 'freelance') {
                        // フリーランス・起業向けイベント
                        workEvents = [
                            // 良い出来事
                            { description: '新しいクライアントを獲得した！', effect: { happiness: 4, charm: 2 } },
                            { description: 'SNSでの発信が話題になった。', effect: { charm: 3, happiness: 2 } },
                            { description: '同業者との良い人脈ができた。', effect: { charm: 2, knowledge: 1, happiness: 2 } },
                            { description: '新しい技術を習得して差別化に成功。', effect: { knowledge: 3, happiness: 2 } },
                            { description: 'クライアントから高評価をもらった！', effect: { charm: 2, happiness: 4 } },
                            { description: '効率的なワークフローを構築した。', effect: { knowledge: 2, happiness: 2 } },
                            { description: '業界のイベントで注目を集めた。', effect: { charm: 4, knowledge: 1, happiness: 3 } },
                            
                            // 悪い出来事
                            { description: 'クライアントとの契約が突然打ち切りに...', effect: { happiness: -4, charm: -1 } },
                            { description: '支払いが遅れて資金繰りが厳しい。', effect: { happiness: -3 } },
                            { description: '競合他社に案件を取られた。', effect: { happiness: -2, charm: -1 } },
                            { description: '作業が思うように進まずストレス。', effect: { happiness: -2 } },
                            { description: '孤独感を感じる日が続く。', effect: { happiness: -3 } },
                            { description: '税務処理で頭を悩ませている。', effect: { happiness: -1, knowledge: 1 } }
                        ];
                    } else {
                        // 会社員向けイベント
                        workEvents = [
                            // 良い出来事
                            { description: '上司からプロジェクトを褒められた！', effect: { happiness: 3, knowledge: 1 } },
                            { description: '新しいスキルを身につけることができた。', effect: { knowledge: 2, happiness: 1 } },
                            { description: '同僚との関係が良好になった。', effect: { charm: 2, happiness: 2 } },
                            { description: '効率的な作業方法を発見した。', effect: { knowledge: 1, happiness: 1 } },
                            { description: '重要な会議でプレゼンが成功した！', effect: { charm: 3, happiness: 3, knowledge: 1 } },
                            { description: '新人の指導を任され、成長を実感。', effect: { charm: 1, knowledge: 2, happiness: 2 } },
                            { description: '業務改善の提案が採用された。', effect: { knowledge: 2, happiness: 3 } },
                            
                            // 悪い出来事
                            { description: '重要な資料を紛失してしまった...', effect: { happiness: -3, charm: -1 } },
                            { description: 'クライアントからクレームを受けた。', effect: { happiness: -2, charm: -1 } },
                            { description: '締切に間に合わず残業が続いている。', effect: { happiness: -2 } },
                            { description: '新しいシステムに慣れず苦戦中。', effect: { happiness: -1 } },
                            { description: '同僚との意見の対立でストレスが溜まる。', effect: { happiness: -2, charm: -1 } },
                            { description: 'ミスをして上司に怒られた...', effect: { happiness: -3 } },
                            { description: '忙しすぎて体調を崩しそう。', effect: { happiness: -2 } }
                        ];
                    }
                    
                    const randomEvent = workEvents[Math.floor(Math.random() * workEvents.length)];
                    showEventModal(randomEvent.description, randomEvent.effect, eventData.age);
                }
            }
            break;
            
        case 'PAYDAY':
            console.log(`PAYDAY イベント処理: position=${position}, player.course=${player.course}, eventData.courses=`, eventData.courses);
            // コース別イベントがある場合はそれを使用
            if (eventData.courses && (player.course === 'company' || player.course === 'freelance')) {
                const courseData = eventData.courses[player.course];
                if (courseData) {
                    console.log('コース別PAYDAYイベントを表示:', courseData);
                    showEventModal(courseData.description, courseData.effect, eventData.age);
                    break;
                }
            }
            
            // 通常のPAYDAY処理（コース別データがない場合）
            if (player.is_student) {
                // 学生の場合は奨学金やお小遣い
                const amount = Math.floor(Math.random() * 20000) + 5000; // 0.5-2.5万円
                showEventMessage(`家族からお小遣いをもらった！`, player.age, { money: amount });
            } else if (player.work_style === 'freelance') {
                // フリーランス・起業コースの場合はボーナスなし
                showEventMessage('フリーランスなのでボーナスはありません。自分の力で頑張りましょう！', player.age, {});
            } else {
                // 会社員の場合は通常の給与は毎ターンもらっているので、ボーナスとして扱う
                if (player.base_salary > 0) {
                    const yearsWorked = Math.max(0, player.age - player.job_start_age);
                    const salary_increases = Math.floor(yearsWorked / 2) * 10000;
                    const current_salary = player.base_salary + salary_increases;
                    const bonus = Math.floor(current_salary * 0.5); // 給与の50%をボーナスとして
                    
                    showEventMessage(`ボーナス支給日！給与の50%分のボーナスをもらった！`, player.age, { money: bonus });
                } else {
                    showEventMessage('まだ仕事が決まっていない...', player.age, {});
                }
            }
            break;
            
        case 'RANDOM':
            handleRandomEvent(eventData);
            break;
            
        case 'CHOICE_MARRIAGE':
            showChoiceModal(eventData.description, 'marriage', eventData.age);
            break;
            
        case 'CHOICE_BABY':
            showChoiceModal(eventData.description, 'baby', eventData.age);
            break;
            
        case 'CHOICE_HOUSE':
            showChoiceModal(eventData.description, 'house', eventData.age);
            break;
            
        case 'GOAL':
            showGoalModal();
            break;
            
        default:
            console.log('未知のイベントタイプ:', eventData.type);
    }
}

// イベントモーダルを表示
function showEventModal(description, effect, age) {
    // 年齢情報を追加
    const ageText = age ? `【${age}歳】` : '';
    
    eventMessage.textContent = `${ageText}${description}`;
    
    // 効果の表示
    if (effect) {
        displayEffectInfo(effect);
        applyEffect(effect);
    } else {
        eventEffect.textContent = '';
        eventEffect.className = 'event-effect-display';
    }
    
    eventModal.style.display = 'flex';
}

// シンプルなイベントメッセージ表示（showEventModalの簡易版）
function showEventMessage(description, age, effect) {
    showEventModal(description, effect, age);
}

// 効果情報を表示
function displayEffectInfo(effect) {
    let effectTexts = [];
    let hasPositive = false;
    let hasNegative = false;
    
    if (effect.money) {
        if (effect.money > 0) {
            effectTexts.push(`💰 お金 +¥${effect.money.toLocaleString()}`);
            hasPositive = true;
        } else {
            effectTexts.push(`💸 お金 -¥${Math.abs(effect.money).toLocaleString()}`);
            hasNegative = true;
        }
    }
    
    if (effect.knowledge) {
        if (effect.knowledge > 0) {
            effectTexts.push(`📚 知識 +${effect.knowledge}`);
            hasPositive = true;
        } else {
            effectTexts.push(`📚 知識 ${effect.knowledge}`);
            hasNegative = true;
        }
    }
    
    if (effect.charm) {
        if (effect.charm > 0) {
            effectTexts.push(`✨ 魅力 +${effect.charm}`);
            hasPositive = true;
        } else {
            effectTexts.push(`✨ 魅力 ${effect.charm}`);
            hasNegative = true;
        }
    }
    
    if (effect.happiness) {
        if (effect.happiness > 0) {
            effectTexts.push(`😊 幸せ +${effect.happiness}`);
            hasPositive = true;
        } else {
            effectTexts.push(`😔 幸せ ${effect.happiness}`);
            hasNegative = true;
        }
    }
    
    // 収支情報を追加
    if (window.currentFinanceInfo) {
        const finance = window.currentFinanceInfo;
        if (effectTexts.length > 0) {
            effectTexts.push(''); // 区切り用の空文字
        }
        
        if (finance.incomeLabel === '学生') {
            effectTexts.push(`🎓 学生生活費: -¥${finance.livingCost.toLocaleString()}`);
            effectTexts.push(`💰 実質収支: ${finance.netIncome.toLocaleString()}`);
        } else if (finance.incomeLabel === '年金') {
            effectTexts.push(`🏛️ 年金収入: +¥${finance.income.toLocaleString()}`);
            effectTexts.push(`🏠 生活費: -¥${finance.livingCost.toLocaleString()}`);
            effectTexts.push(`💰 実質収支: +¥${finance.netIncome.toLocaleString()}`);
        } else {
            effectTexts.push(`💰 ${finance.incomeLabel}収入: +¥${finance.income.toLocaleString()}${finance.salaryInfo}`);
            effectTexts.push(`🏠 生活費: -¥${finance.livingCost.toLocaleString()}`);
            effectTexts.push(`💰 実質収支: +¥${finance.netIncome.toLocaleString()}`);
        }
    }
    
    eventEffect.textContent = effectTexts.join(' | ');
    
    // 色分けを設定
    if (hasPositive && !hasNegative) {
        eventEffect.className = 'event-effect-display effect-positive';
    } else if (hasNegative && !hasPositive) {
        eventEffect.className = 'event-effect-display effect-negative';
    } else if (hasPositive && hasNegative) {
        eventEffect.className = 'event-effect-display effect-neutral';
    } else {
        eventEffect.className = 'event-effect-display';
    }
}

// 転職イベントをチェック
function checkJobChangeEvent() {
    const targetAges = [25, 30, 35, 40, 50];
    
    for (const age of targetAges) {
        if (player.age === age) {
            const flagName = `job_changed_at_${age}`;
            console.log(`年齢${age}歳：転職チェック中... フラグ: ${player[flagName]}, 学生: ${player.is_student}`);
            
            if (!player[flagName] && !player.is_student && player.base_salary > 0) {
                console.log(`${age}歳で転職イベント発生！`);
                player[flagName] = true;
                showJobChangeModal();
                return true;
            }
        }
    }
    return false;
}

// 結婚イベントをチェック（30歳で必ず発生）
function checkMarriageEvent() {
    // すでに結婚している場合は結婚イベントを発生させない
    if (player.is_married || player.has_divorced) {
        return false;
    }
    
    // 30歳で必ず結婚イベントを発生（1回のみ）
    if (player.age === 30 && player.marriage_proposals_received === 0) {
        console.log(`30歳で結婚イベント必ず発生！`);
        player.marriage_proposals_received++;
        showMarriageModal();
        return true;
    }
    return false;
}

// 結婚確認モーダルを表示
function showMarriageModal() {
    marriageModal.style.display = 'flex';
}

// 結婚確認モーダルを非表示
function hideMarriageModal() {
    marriageModal.style.display = 'none';
}

// 結婚選択の設定
function setupMarriageSelection() {
    marriageOptions.addEventListener('click', function(e) {
        console.log('結婚オプションがクリックされました:', e.target);
        console.log('data-marriage:', e.target.dataset.marriage);
        
        if (e.target.dataset.marriage) {
            const choice = e.target.dataset.marriage;
            console.log('選択された結婚オプション:', choice);
            
            hideMarriageModal();
            
            if (choice === 'yes') {
                // 結婚する
                player.is_married = true;
                player.marriage_age = player.age;
                setTimeout(() => {
                    showEventMessage(`${player.age}歳で結婚しました！新しい人生の始まりです。`, player.age, { happiness: 15, money: -500000 });
                }, 100);
            } else {
                // 結婚しない
                setTimeout(() => {
                    showEventMessage('今は仕事に集中することにした。', player.age, { knowledge: 2 });
                }, 100);
            }
        }
    });
}

// 離婚イベントをチェック
function checkDivorceEvent() {
    // 結婚していて、まだ離婚していない場合のみチェック
    if (!player.is_married || player.is_divorced) {
        return false;
    }
    
    const targetAges = [45, 58];
    
    for (const age of targetAges) {
        if (player.age === age) {
            // 45歳で離婚した場合、58歳のイベントは発生しない
            if (age === 58 && player.is_divorced) {
                return false;
            }
            
            // フリーランスの45歳は事業拡大イベントを優先するため離婚イベントはスキップ
            if (age === 45 && player.work_style === 'freelance') {
                return false;
            }
            
            console.log(`${age}歳で離婚イベント発生！`);
            player.divorce_proposals_received++;
            showDivorceModal();
            return true;
        }
    }
    return false;
}

// 離婚確認モーダルを表示
function showDivorceModal() {
    divorceModal.style.display = 'flex';
}

// 離婚確認モーダルを非表示
function hideDivorceModal() {
    divorceModal.style.display = 'none';
}

// 離婚選択の設定
function setupDivorceSelection() {
    divorceOptions.addEventListener('click', function(e) {
        console.log('離婚オプションがクリックされました:', e.target);
        console.log('data-divorce:', e.target.dataset.divorce);
        
        if (e.target.dataset.divorce) {
            const choice = e.target.dataset.divorce;
            console.log('選択された離婚オプション:', choice);
            
            hideDivorceModal();
            
            if (choice === 'yes') {
                // 離婚する
                player.is_married = false;
                player.is_divorced = true;
                player.has_divorced = true; // 離婚経験フラグも設定
                player.divorce_age = player.age;
                setTimeout(() => {
                    if (player.has_children) {
                        showEventMessage(`${player.age}歳で離婚しました。子どもの親権を獲得し、シングルマザー/ファザーとして新しい人生を歩みます。`, player.age, { happiness: -10, money: -300000, knowledge: 3 });
                    } else {
                        showEventMessage(`${player.age}歳で離婚しました。一人の時間を大切にして新しい人生を歩みます。`, player.age, { happiness: -5, money: -200000, knowledge: 2 });
                    }
                }, 100);
            } else {
                // 関係を修復する
                setTimeout(() => {
                    showEventMessage('パートナーとの関係修復に努力することにした。お互いを理解し合う時間を作ろう。', player.age, { happiness: 5, charm: 2 });
                }, 100);
            }
        }
    });
}

// 子どもが生まれるイベント（結婚している場合のみ）
function checkChildBirthEvent() {
    if (!player.is_married) {
        return false;
    }
    
    // 結婚後2〜5年で子どもが生まれる可能性
    const marriageYears = player.age - player.marriage_age;
    if (marriageYears >= 2 && marriageYears <= 5 && player.number_of_children < 2) {
        // 30%の確率で子どもが生まれる
        if (Math.random() < 0.3) {
            player.has_children = true;
            player.number_of_children++;
            
            const childNumber = player.number_of_children === 1 ? '第一子' : '第二子';
            setTimeout(() => {
                showEventMessage(`${childNumber}が誕生しました！家族が増えて幸せです。`, player.age, { happiness: 20, money: -200000 });
            }, 100);
            return true;
        }
    }
    return false;
}

// 役職定年イベントをチェック（会社員の55歳）
function checkRoleRetirementEvent() {
    if (player.age === 55 && player.work_style === 'employee' && player.role_retirement_age === 0) {
        player.role_retirement_age = 55;
        
        setTimeout(() => {
            showEventMessage('55歳で役職定年を迎えました。これ以降は給与の昇給が停止します。', player.age, { happiness: -2 });
        }, 100);
        return true;
    }
    return false;
}

// 退職イベントをチェック（会社員の65歳）
function checkRetirementEvent() {
    if (player.age === 65 && player.work_style === 'employee' && !player.is_retired) {
        player.is_retired = true;
        
        // 現在の月給を計算
        const yearsWorked = Math.max(0, player.age - player.job_start_age);
        const salary_increases = Math.floor(yearsWorked / 2) * 10000;
        const current_salary = player.base_salary + salary_increases;
        
        // 退職金は月給の10倍
        const retirement_bonus = current_salary * 10;
        
        setTimeout(() => {
            showEventMessage(`65歳で定年退職となりました。長年のお勤めお疲れ様でした！退職金として月給の10倍をお受け取りください。`, player.age, { money: retirement_bonus, happiness: 10, knowledge: 2 });
        }, 100);
        return true;
    }
    return false;
}

// 事業成功イベントをチェック（フリーランス・起業の45歳、53歳）
function checkBusinessSuccessEvent() {
    if (player.work_style !== 'freelance') {
        return false;
    }
    
    const targetAges = [45, 53];
    
    for (const age of targetAges) {
        if (player.age === age) {
            const flagName = `business_success_at_${age}`;
            
            if (!player[flagName]) {
                player[flagName] = true;
                
                // 事業拡大の選択肢を表示
                setTimeout(() => {
                    showBusinessExpansionModal(age);
                }, 100);
                return true;
            }
        }
    }
    return false;
}

// 事業拡大モーダルを表示
function showBusinessExpansionModal(age) {
    businessExpansionModal.style.display = 'flex';
    
    // 年齢に応じてメッセージを調整
    const modal = businessExpansionModal.querySelector('.modal-content');
    const title = modal.querySelector('h2');
    const description = modal.querySelector('p');
    
    title.textContent = `${age}歳 - 事業拡大のチャンス！`;
    description.textContent = `新しいビジネスチャンスが訪れました。リスクはありますが、大きく成長する可能性があります。事業を拡大しますか？`;
}

// 事業拡大モーダルを非表示
function hideBusinessExpansionModal() {
    businessExpansionModal.style.display = 'none';
}

// 孫誕生イベントをチェック
function checkGrandchildBirthEvent() {
    // 子供がいて、まだ孫がいない場合のみチェック
    if (!player.has_children || player.has_grandchildren) {
        return false;
    }
    
    // 結婚したことがない場合は孫は生まれない
    if (player.marriage_age === 0) {
        return false;
    }
    
    // 子供が生まれてから20年以上経過していて、プレイヤーが65歳以上の場合
    const oldestChildAge = player.age - (player.marriage_age + 3); // 結婚3年後に最初の子供が生まれたと仮定
    
    if (player.age >= 65 && oldestChildAge >= 20) {
        // 20%の確率で孫が生まれる
        if (Math.random() < 0.2) {
            player.has_grandchildren = true;
            setTimeout(() => {
                showEventMessage('お孫さんが誕生しました！新しい家族が増えて幸せです。', player.age, { happiness: 25, money: -100000 });
            }, 100);
            return true;
        }
    }
    return false;
}

// 条件付きイベントかどうかを判定
function isConditionalEvent(position) {
    const conditionalPositions = [
        26, // 恋愛関連
        30, 31, 35, 41, 45, 53, 58, 62, 72, 78, 96, // 結婚・パートナー関連
        51, 52, // 家購入関連
        74, 82, 84, 91 // 孫関連
    ];
    return conditionalPositions.includes(position);
}

// イベントの条件を満たしているかチェック
function meetsEventConditions(position) {
    // 恋愛関連イベント（結婚していない場合のみ）
    if (position === 26 && (player.is_married || player.has_divorced)) {
        return false;
    }
    
    // 結婚提案イベント（結婚していない場合のみ）
    if (position === 30 && (player.is_married || player.has_divorced)) {
        return false;
    }
    
    // 結婚関連イベント（結婚している場合のみ）
    const marriageRelatedPositions = [31, 35, 41, 45, 53, 58, 62, 72, 78, 96];
    if (marriageRelatedPositions.includes(position) && !player.is_married) {
        return false;
    }
    
    // パートナー関連イベント（離婚後は表示しない）
    const partnerRelatedPositions = [78, 96]; // 夫婦旅行、パートナーに感謝
    if (partnerRelatedPositions.includes(position) && player.has_divorced) {
        return false;
    }
    
    // フリーランスの事業拡大イベント年齢では結婚関連イベントをスキップ
    if ((position === 45 || position === 53) && player.work_style === 'freelance') {
        return false;
    }
    
    // 家購入関連イベント
    const houseRelatedPositions = [51, 52]; // ローン返済、家具購入
    if (houseRelatedPositions.includes(position) && !player.has_house) {
        return false;
    }
    
    // 孫関連イベント
    const grandchildrenPositions = [74, 82, 84, 91];
    if (grandchildrenPositions.includes(position) && !player.has_grandchildren) {
        return false;
    }
    
    return true;
}

// 条件を満たしていない場合の代替イベント
function showAlternativeEvent(position) {
    let alternativeEvents = {
        // 恋愛関連の代替イベント（結婚している場合 or 離婚後）
        26: player.is_married ? 
            { description: 'パートナーとの愛が深まった。素敵な時間を過ごす。', effect: { happiness: 12, charm: 1 } } :
            { description: '自分磨きに時間を使った。新しい自分を発見。', effect: { happiness: 8, charm: 2 } },
        
        // 結婚提案の代替イベント（結婚している場合 or 離婚後）
        30: player.is_married ? 
            { description: 'パートナーとの記念日を祝った。愛を再確認する素敵な時間。', effect: { happiness: 15, money: -50000 } } :
            { description: '一人の時間を大切にして、趣味に没頭した。', effect: { happiness: 10, knowledge: 2 } },
        
        // 結婚関連の代替イベント
        31: { description: '一人旅で海外へ！自由な時間を満喫した。', effect: { money: -100000, happiness: 10, knowledge: 2 } },
        35: { description: '将来のライフプランについて考える時期。', effect: { knowledge: 2, happiness: 1 } },
        41: { description: '友人の子供と遊ぶ機会があった。', effect: { happiness: 5 } },
        45: { description: '友人たちと遊園地へ。楽しい時間を過ごした。', effect: { money: -15000, happiness: 7 } },
        53: { description: '地域のスポーツイベントに参加した。', effect: { happiness: 5, charm: 1 } },
        58: { description: '一人でハワイ旅行へ！リフレッシュできた。', effect: { money: -300000, happiness: 15 } },
        62: { description: '甥や姪の進学祝いを送った。', effect: { money: -50000, happiness: 3 } },
        72: { description: '友人の子供が独立。成長を見守ってきた喜びを感じる。', effect: { happiness: 5 } },
        78: { description: '友人と温泉旅行。久しぶりにゆっくりできた。', effect: { money: -40000, happiness: 8 } },
        
        // 家購入関連の代替イベント
        51: { description: '賃貸の更新料を支払った。', effect: { money: -30000 } },
        52: { description: '部屋の模様替えをした。新しいインテリアで気分転換。', effect: { money: -50000, happiness: 2 } },
        
        // パートナー関連イベントの代替（離婚後）
        78: { description: '一人で温泉旅行へ。自分だけの時間を満喫した。', effect: { money: -60000, happiness: 8 } },
        96: { description: '自分自身を大切にしている。これまでの人生を振り返る。', effect: { happiness: 8 } },
        
        // 孫関連の代替イベント
        74: { description: '友人の孫と遊ぶ機会があった。子供の無邪気さに癒される。', effect: { happiness: 10 } },
        82: { description: '近所の子供たちの成長を見守るのが楽しみ。', effect: { happiness: 5 } },
        84: { description: 'NFT投資デビュー。デジタル時代の新しい投資に挑戦！', effect: { knowledge: 2, happiness: 2, money: -100000 } },
        91: { description: '近所の子供たちにお菓子をあげる。', effect: { money: -5000, happiness: 3 } }
    };
    
    const alternative = alternativeEvents[position];
    if (alternative) {
        showEventModal(alternative.description, alternative.effect, player.age);
    }
}

// コース選択モーダルを表示
function showCourseSelectModal(description, age) {
    console.log('showCourseSelectModal 呼び出し:', { description, age });
    console.trace('showCourseSelectModal のコールスタック');
    const ageText = age ? `【${age}歳】` : '';
    courseSelectTitle.textContent = `${ageText}${description}`;
    courseSelectModal.style.display = 'flex';
}

// 効果をプレイヤーに適用
function applyEffect(effect) {
    if (effect.money) player.money += effect.money;
    if (effect.knowledge) player.knowledge += effect.knowledge;
    if (effect.charm) player.charm += effect.charm;
    if (effect.happiness) player.happiness += effect.happiness;
    
    // パラメータの下限を設定
    player.knowledge = Math.max(0, player.knowledge);
    player.charm = Math.max(0, player.charm);
    player.happiness = Math.max(0, player.happiness);
    
    // UI更新
    updatePlayerInfo();
}

// プレイヤー情報の表示更新
function updatePlayerInfo() {
    // 既存のプレイヤー名表示を拡張
    const playerNameSpan = document.getElementById('player-name');
    playerNameSpan.textContent = `プレイヤー1 (お金:¥${player.money.toLocaleString()}, 知識:${player.knowledge}, 魅力:${player.charm}, 幸福:${player.happiness})`;
}

// ランダムイベントの処理
function handleRandomEvent(eventData) {
    const randomIndex = Math.floor(Math.random() * eventData.outcomes.length);
    const selectedOutcome = eventData.outcomes[randomIndex];
    
    showEventModal(`${eventData.description}\n\n${selectedOutcome.text}`, selectedOutcome.effect, eventData.age);
}

// 選択肢モーダルを表示
function showChoiceModal(description, choiceType, age) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    
    let choices = [];
    switch (choiceType) {
        case 'marriage':
            choices = [
                { text: '結婚する💒 (-¥500,000)', effect: { money: -500000, happiness: 15 } },
                { text: 'まだ早い😔', effect: { happiness: -3 } }
            ];
            break;
        case 'baby':
            choices = [
                { text: '子供を持つ👶 (-¥100,000)', effect: { money: -100000, happiness: 20 } },
                { text: '今は見送る😟', effect: { happiness: -2 } }
            ];
            break;
        case 'house':
            choices = [
                { text: '家を購入する🏠 (頭金¥3,000,000)', effect: { money: -3000000, happiness: 25 }, special: 'buy_house' },
                { text: '賃貸を続ける🏢', effect: { money: 0, happiness: 0 } }
            ];
            break;
    }
    
    const ageText = age ? `【${age}歳】` : '';
    
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${ageText}${description}</h2>
            <div id="choice-buttons">
                ${choices.map((choice, index) => 
                    `<button class="choice-btn" data-index="${index}">${choice.text}</button>`
                ).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 選択ボタンのイベントリスナー
    modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('choice-btn')) {
            const choiceIndex = parseInt(e.target.dataset.index);
            const selectedChoice = choices[choiceIndex];
            
            // 特別なアクションを処理
            if (selectedChoice.special === 'buy_house') {
                player.has_house = true;
            }
            
            // babyの選択処理
            if (choiceType === 'baby' && choiceIndex === 0) {
                // 子どもを持つことを選択
                player.has_children = true;
                player.number_of_children++;
            }
            
            showEventModal(selectedChoice.text, selectedChoice.effect, age);
            document.body.removeChild(modal);
        }
    });
}

// エンディングストーリーを決定
function determineEndingStory() {
    // 12種類のエンディングを判定
    
    // 1. 大成功エンディング：会社員で結婚・子供あり・事業成功・高収入
    if (player.work_style === 'employee' && player.is_married && player.has_children && player.money >= 50000000) {
        return {
            title: "大成功の人生",
            story: "あなたは会社員として着実にキャリアを積み重ね、愛する家族と共に豊かな人生を歩みました。高い収入と安定した生活を手に入れ、子どもたちも立派に成長しました。まさに理想的な人生と言えるでしょう。"
        };
    }
    
    // 2. 起業家エンディング：フリーランスで高収入・事業成功
    if (player.work_style === 'freelance' && player.business_success && player.money >= 30000000) {
        return {
            title: "起業家として大成功",
            story: "あなたは自分の力で事業を立ち上げ、見事に成功を収めました。リスクを恐れず挑戦し続けた結果、大きな富と自由を手に入れました。多くの人があなたの成功を羨み、尊敬しています。"
        };
    }
    
    // 3. 愛情重視エンディング：結婚・子供・孫あり（収入は中程度）
    if (player.is_married && player.has_children && player.has_grandchildren) {
        return {
            title: "愛に満ちた人生",
            story: "お金よりも大切なものを見つけた人生でした。愛する家族に囲まれ、子どもや孫たちの成長を見守ることができました。物質的な豊かさよりも、心の豊かさを追求した素晴らしい人生です。"
        };
    }
    
    // 4. 自由人エンディング：独身・フリーランス・中程度の成功
    if (!player.is_married && player.work_style === 'freelance' && player.money >= 10000000) {
        return {
            title: "自由を謳歌した人生",
            story: "あなたは誰にも縛られない自由な人生を選択しました。フリーランスとして自分のペースで働き、趣味や興味のあることに時間を費やしました。束縛のない、のびのびとした人生でした。"
        };
    }
    
    // 5. 安定重視エンディング：会社員・結婚・普通の収入
    if (player.work_style === 'employee' && player.is_married && player.money >= 5000000) {
        return {
            title: "安定した堅実な人生",
            story: "あなたは堅実で安定した人生を歩みました。会社員として真面目に働き、家族を大切にし、平穏な日々を過ごしました。派手さはないものの、確実で安心できる人生でした。"
        };
    }
    
    // 6. 晩婚エンディング：遅めの結婚・子供なし・キャリア重視
    if (player.is_married && !player.has_children && player.age >= 40) {
        return {
            title: "キャリアを重視した人生",
            story: "あなたはキャリアを最優先に考え、晩年に理想のパートナーと出会いました。子どもはいませんが、二人で充実した時間を過ごし、お互いを支え合う素敵な関係を築きました。"
        };
    }
    
    // 7. 独身貴族エンディング：独身・高収入・高い能力値
    if (!player.is_married && player.money >= 20000000 && (player.knowledge + player.charm + player.happiness) >= 150) {
        return {
            title: "独身貴族の人生",
            story: "あなたは結婚という枠にとらわれず、自分自身を磨き続けました。高い収入と教養を身につけ、多くの人から尊敬される存在になりました。一人の時間を存分に楽しんだ充実した人生でした。"
        };
    }
    
    // 8. 苦労人エンディング：離婚経験・低収入だが高い幸福度
    if (player.has_divorced && player.money < 5000000 && player.happiness >= 80) {
        return {
            title: "困難を乗り越えた人生",
            story: "人生には多くの困難がありましたが、あなたはそれらを一つずつ乗り越えてきました。お金は多くありませんが、経験から得た知恵と強い心を持っています。真の強さを身につけた人生でした。"
        };
    }
    
    // 9. 波乱万丈エンディング：転職・離婚・再婚など多くの変化
    if (player.job_changes >= 2 && (player.has_divorced || player.course_changes >= 1)) {
        return {
            title: "波乱万丈の人生",
            story: "あなたの人生は変化に富んでいました。何度も新しい挑戦をし、時には失敗もありましたが、その都度立ち上がってきました。多くの経験を積んだ、ドラマチックな人生でした。"
        };
    }
    
    // 10. 平凡エンディング：特に大きな変化のない安定した人生
    if (player.work_style === 'employee' && !player.has_divorced && player.money >= 3000000 && player.money < 10000000) {
        return {
            title: "平凡だけど幸せな人生",
            story: "あなたは特別な出来事があったわけではありませんが、毎日を大切に過ごしました。平凡かもしれませんが、それが一番の幸せだということを知っています。穏やかで心温まる人生でした。"
        };
    }
    
    // 11. 挑戦者エンディング：フリーランス・低収入だが高い知識/魅力
    if (player.work_style === 'freelance' && player.money < 5000000 && (player.knowledge >= 60 || player.charm >= 60)) {
        return {
            title: "挑戦し続けた人生",
            story: "お金よりも自分の成長を重視した人生でした。フリーランスとして様々な挑戦をし、多くのスキルと経験を積みました。収入は少なくても、自分らしく生きることができた満足感に満ちた人生です。"
        };
    }
    
    // 12. デフォルトエンディング：その他の場合
    return {
        title: "あなたらしい人生",
        story: "あなたは自分なりの人生を歩みました。他の人と比べる必要はありません。あなたが選択した道、経験した全てが、あなただけの特別な人生の物語です。それぞれの瞬間が、かけがえのない思い出となりました。"
    };
}

// 最終ステータス表示モーダル
function showFinalStatusModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    
    const finalScore = player.money + (player.knowledge * 10000) + (player.charm * 10000) + (player.happiness * 5000);
    
    // エンディングストーリーを取得
    const endingStory = determineEndingStory();
    
    // 人生の軌跡を整理
    const lifeEvents = [];
    
    // 学歴
    let education = '';
    switch(player.career_path) {
        case 'high_school': education = '高校卒業'; break;
        case 'college': education = '専門学校卒業'; break;
        case 'university': education = '大学卒業'; break;
        default: education = '不明';
    }
    lifeEvents.push(`📚 学歴: ${education}`);
    
    // 職業・働き方
    const workStyle = player.work_style === 'employee' ? '会社員' : 'フリーランス・起業';
    lifeEvents.push(`💼 働き方: ${workStyle}`);
    
    // 結婚・家族
    if (player.is_married) {
        lifeEvents.push(`💕 ${player.marriage_age}歳で結婚`);
        if (player.has_children) {
            lifeEvents.push(`👶 子ども: ${player.number_of_children}人`);
        }
        if (player.has_grandchildren) {
            lifeEvents.push(`👵 孫がいる`);
        }
    } else if (player.has_divorced) {
        lifeEvents.push(`💔 ${player.marriage_age}歳で結婚、${player.divorce_age}歳で離婚`);
        if (player.has_children) {
            lifeEvents.push(`👶 子ども: ${player.number_of_children}人（シングル）`);
        }
    } else {
        lifeEvents.push(`🕊️ 独身`);
    }
    
    // 転職・キャリア変更
    if (player.job_changes > 0) {
        lifeEvents.push(`🔄 転職: ${player.job_changes}回`);
    }
    if (player.course_changes > 0) {
        lifeEvents.push(`↔️ キャリア変更: ${player.course_changes}回`);
    }
    
    // 特別な成果
    if (player.business_success) {
        lifeEvents.push(`🚀 事業で大成功`);
    }
    if (player.has_house) {
        lifeEvents.push(`🏠 マイホーム購入`);
    }
    if (player.is_retired) {
        lifeEvents.push(`🎌 65歳で退職`);
    }
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px; transform: scale(0.85); max-height: 95vh; overflow-y: auto;">
            <h2 style="font-size: 22px; margin-bottom: 15px; text-align: center;">🎉 ゲームクリア！ 🎉</h2>
            
            <!-- エンディングストーリー -->
            <div style="margin: 15px 0; padding: 15px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; color: white;">
                <h3 style="font-size: 18px; margin-bottom: 10px; text-align: center; color: #fff;">${endingStory.title}</h3>
                <p style="font-size: 14px; line-height: 1.6; text-align: center; margin: 0;">${endingStory.story}</p>
            </div>
            
            <!-- 最終ステータス -->
            <div style="margin: 12px 0; padding: 12px; background: #f0f8ff; border-radius: 8px;">
                <h3 style="font-size: 16px; margin-bottom: 8px; text-align: center;">最終ステータス</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-bottom: 8px; font-size: 13px;">
                    <p><strong>💰</strong> ¥${player.money.toLocaleString()}</p>
                    <p><strong>📚</strong> ${player.knowledge}</p>
                    <p><strong>✨</strong> ${player.charm}</p>
                    <p><strong>😊</strong> ${player.happiness}</p>
                </div>
                <hr style="margin: 6px 0;">
                <p style="text-align: center; font-size: 14px;"><strong>🏆 総合スコア: ${finalScore.toLocaleString()}点</strong></p>
            </div>
            
            <!-- 人生の軌跡 -->
            <div style="margin: 12px 0; padding: 12px; background: #f8f9fa; border-radius: 8px;">
                <h3 style="font-size: 16px; margin-bottom: 8px; text-align: center;">あなたの人生の軌跡</h3>
                <div style="text-align: left; font-size: 13px; line-height: 1.3; columns: 2; column-gap: 15px;">
                    ${lifeEvents.map(event => `<p style="margin: 3px 0; break-inside: avoid;">${event}</p>`).join('')}
                </div>
            </div>
            
            <div style="display: flex; justify-content: center; margin-top: 15px;">
                <button id="restart-from-final-btn" style="background-color: #e74c3c; color: white; border: none; padding: 12px 30px; font-size: 16px; font-weight: bold; border-radius: 8px; cursor: pointer;">
                    🔄 もう一度プレイ
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // リスタートボタンのイベントリスナー
    modal.querySelector('#restart-from-final-btn').addEventListener('click', function() {
        location.reload();
    });
}

// ゴールモーダルを表示
function showGoalModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.style.display = 'flex';
    
    const finalScore = player.money + (player.knowledge * 10000) + (player.charm * 10000) + (player.happiness * 5000);
    
    // エンディングストーリーを取得
    const endingStory = determineEndingStory();
    
    modal.innerHTML = `
        <div class="modal-content">
            <h2>🎉 ゲームクリア！ 🎉</h2>
            <h3 style="color: #2c3e78; margin: 20px 0;">${endingStory.title}</h3>
            <p style="font-size: 16px; line-height: 1.6; margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">${endingStory.story}</p>
            <div style="margin: 20px 0; padding: 20px; background: #f0f8ff; border-radius: 10px;">
                <h3>最終ステータス</h3>
                <p>💰 お金: ¥${player.money.toLocaleString()}</p>
                <p>📚 知識: ${player.knowledge}</p>
                <p>✨ 魅力: ${player.charm}</p>
                <p>😊 幸福: ${player.happiness}</p>
                <p>💼 コース: ${player.course === 'company' ? '会社員/公務員' : 'フリーランス/起業'}</p>
                <hr>
                <p><strong>🏆 総合スコア: ${finalScore.toLocaleString()}点</strong></p>
            </div>
            <button id="restart-btn">もう一度プレイ</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // リスタートボタンのイベントリスナー
    modal.querySelector('#restart-btn').addEventListener('click', function() {
        location.reload();
    });
}

// イベントハンドラーの設定
function setupEventHandlers() {
    // スタートボタン
    startGameBtn.addEventListener('click', function() {
        titleScreenModal.style.display = 'none';
        characterModal.style.display = 'flex';
    });
    
    // イベントモーダルのOKボタン
    eventOkBtn.addEventListener('click', function() {
        eventModal.style.display = 'none';
    });
    
    // コース選択ボタン
    courseOptions.addEventListener('click', function(e) {
        if (e.target.dataset.course) {
            player.course = e.target.dataset.course;
            
            // 働き方を設定
            if (e.target.dataset.course === 'freelance') {
                player.work_style = 'freelance';
                player.freelance_start_turn = player.current_turn + 2; // 次のターンから起業開始
            } else {
                player.work_style = 'employee';
            }
            
            courseSelectModal.style.display = 'none';
            
            // コース選択完了を表示
            const courseName = e.target.dataset.course === 'company' ? '会社員/公務員' : 'フリーランス/起業';
            const currentEvent = eventsData[currentPosition];
            
            let message = `${courseName}コースを選択しました！`;
            if (e.target.dataset.course === 'freelance') {
                message += '\n最初の5ターンは収入が不安定になります...';
            }
            
            showEventModal(message, {}, currentEvent ? currentEvent.age : null);
        }
    });
    
    // 事業拡大選択の設定
    businessExpansionOptions.addEventListener('click', function(e) {
        console.log('事業拡大オプションがクリックされました:', e.target);
        console.log('data-expansion:', e.target.dataset.expansion);
        
        if (e.target.dataset.expansion) {
            const choice = e.target.dataset.expansion;
            console.log('選択された事業拡大オプション:', choice);
            
            hideBusinessExpansionModal();
            
            if (choice === 'yes') {
                // 事業拡大に挑戦する場合、30%の確率で成功
                const success = Math.random() < 0.3;
                
                if (success) {
                    // 成功した場合、報酬が5倍になる
                    player.base_salary = Math.floor(player.base_salary * 5);
                    player.business_success = true; // 事業成功フラグを設定
                    
                    setTimeout(() => {
                        showEventMessage(`事業拡大が大成功！新しい市場を開拓し、報酬が5倍になりました！`, player.age, { happiness: 20, charm: 5, knowledge: 3 });
                    }, 100);
                } else {
                    // 失敗した場合、報酬が20%減少
                    player.base_salary = Math.floor(player.base_salary * 0.8);
                    
                    setTimeout(() => {
                        showEventMessage(`事業拡大は失敗に終わりました。投資した資金を失い、報酬が20%減少しました...`, player.age, { happiness: -10, money: -500000 });
                    }, 100);
                }
            } else {
                // 現状維持を選んだ場合
                setTimeout(() => {
                    showEventMessage(`慎重に検討した結果、現状維持を選択しました。安定した経営を続けています。`, player.age, { knowledge: 2, happiness: 1 });
                }, 100);
            }
        }
    });
}