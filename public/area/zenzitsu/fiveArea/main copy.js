// SCSS => CSS
import "./scss/style.scss";

document.querySelector("#mainColumn").innerHTML = `
<div class="">

    <!-- main content -->
    <div id="mainColumn">
        <h1 class="main-visual">
            <img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/taimen_kakuarea_mainvisual_01d.jpg" alt="～これを受ければ安心！～ 看護国師前日講座 対面講座（エリア別）・全国Zoom配信画像">
        </h1>
    </div>

    <section class="mt2Rem mb2Rem py-05Rem">
        <p class="mb05Rem fwB">「あと１点」で泣かない為に、国試前日に確認しておきたい必修領域の重要なポイントの総復習をします。</p>
        <p class="mb05Rem fwB">分からないところがあれば受講生専用の掲示板で質問できます。</p>
        <p class="mb05Rem fwB">また、他の受講生の質問や講師からの回答を見ることもできますので、知識の確認もできます。</p>
        <p class="mb1Rem fwB">最後まで諦めないあなたを全力で応援します！一緒に最終確認をしましょう！</p>
        <p class="mb05Rem fwB">【内容・コマ数】必修領域の重要ポイント（70分 x 2コマ）</p>
        <p class="fwB">【講義形態】Zoom配信 または 対面講座（会場講義）</p>
    </section>

    <section class="lecture-info-section mb4Rem">
        <div class="rehearsal-info">
            <div class="lecture-info">
                <div class="info-details">
                    <ul class="info-details-list">
                    <!--
                        <li>
                            <h3><i class="fa-regular fa-lightbulb mr05Rem"></i>内容・コマ数</h3>
                            <p class="inline-block">絶対に押さえておきたい<pan class="fColor-Red fwB">必修領域</pan>の重要ポイント<small>（70分 x 2コマ）</small> </p>
                        </li>
                        <li>
                            <h3><i class="fa-solid fa-cube mr05Rem"></i>講義形態</h3>
                            <p class="inline-block borderR05 bg-lightBlue_B px-05Rem py-1Rem">Zoom 配信</p>
                            <p class="inline-block ml05Rem">または、</p>
                            <p class="inline-block mb1Rem">
                                <span class="borderR05 bg-lightPink mr05Rem px-05Rem py-1Rem">対面講座 （会場講義）</span>
                                <small class="txtArea">（会場講義：仙台、東京、名古屋、大阪、福岡）</small>
                            </p>
                            <span class="infoTxt">スマートフォンやタブレットで講義をご視聴になる場合は、 Zoom アプリのインストールとサインアップ （新規登録） が必要です。 事前にお済ませいただきますようお願いいたします。</span>
                        </li>
                        -->

                        <li>
                            <h3><i class="fa-solid fa-film mr05Rem"></i>見逃し配信</h3>
                            <time class="fwB">2025年2月15日（土）配信直後 ～ 2025年2月（第114回国試当日の朝まで）</time>
                            <small class="d-block mt05Rem fColor-Red">※受講形態にかかわらず、見逃し配信をご視聴いただけます。</small>
                        </li>
                        <li>
                            <h3><i class="fa-solid fa-cart-shopping mr05Rem"></i>価格</h3>
                            <p class="inline-block"><span class="fwB">各5,000円</span><small>（税込 / 教材付き）</small></p>
                            <small class="d-block mt05Rem">※対面講座、Zoom配信講座ともに同一価格となります。</small>
                        </li>
                        <li>
                            <h3><i class="fa-solid fa-book mr05Rem"></i>教材</h3>
                            <p class="inline-block">
                                <span class="fwB">オリジナル教材</span><br>
                                <small>【Zoom配信】2025年2月1日（土） からマイページよりダウンロードまたは印刷することができます。<br>【対面講座】当日配布いたします。</small>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section>
        <!-- ページ内リンク集 -->
        <div class="page-links">
            <ul>
                <li><a href="#national">全国 Zoom配信</a></li>
                <li><a href="#sendai">対面講座（仙台）</a></li>
                <li><a href="#tokyo">対面講座（東京）</a></li>
                <li><a href="#nagoya">対面講座（名古屋）</a></li>
                <li><a href="#osaka">対面講座（大阪）</a></li>
                <li><a href="#fukuoka">対面講座（福岡）</a></li>
            </ul>
        </div>
    </section>

    <section class="mb4Rem">
        <div class="courses-grid">
            <div class="course-item courseColorPink">
                <div class="course-info">
                    <i class="fa-solid fa-video mr05Rem"></i>全国 Zoom配信 <p>時間：10:00 〜 12:30<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span></p>
                </div>
                <div class="fa-icon2_wrap cart-design cart-mainbutton">
                    <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1237/detail" data-product_id="1237">
                        <div class="fa-icon2_item1 p_chousei lightpinkbtn1">
                            <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                        </div>
                        <div class="fa-icon2_item2 lightpinkbtn2">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="course-item courseColorPurple">
                <div class="course-info">
                    <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（仙台） <p>会場：TKP 仙台青葉通カンファレンスセンター<br>時間：14:00 ～ 16:30<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span></p>
                </div>
                <div class="fa-icon2_wrap cart-design cart-mainbutton">
                    <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1250/detail" data-product_id="1250">
                        <div class="fa-icon2_item1 p_chousei murasaki2btn1">
                            <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                        </div>
                        <div class="fa-icon2_item2 murasaki2btn2">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="course-item courseColorBlue">
                <div class="course-info">
                    <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（東京） <p>会場：工学院大学 新宿キャンパス<br>時間：10:00 ～ 12:30<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span></p>
                </div>
                <div class="fa-icon2_wrap cart-design cart-mainbutton">
                    <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1252/detail" data-product_id="1252">
                        <div class="fa-icon2_item1 p_chousei lightblue2btn1">
                            <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                        </div>
                        <div class="fa-icon2_item2 lightblue2btn2">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="course-item courseColorOrange_B">
                <div class="course-info">
                    <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（名古屋） <p>会場：名駅カンファレンスセンター<br>時間：15:00 ～ 17:30<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span></p>
                </div>
                <div class="fa-icon2_wrap cart-design cart-mainbutton">
                    <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1260/detail" data-product_id="1260">
                        <div class="fa-icon2_item1 p_chousei orange2btn1">
                            <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                        </div>
                        <div class="fa-icon2_item2 orange2btn2">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="course-item courseColorOrange">
                <div class="course-info">
                    <p>
                        <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（大阪）<br /> 会場：大阪駅前第 3ビル 17階<br>時間：10:00 ～ 12:30<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span>
                    </p>
                </div>
                <div class="fa-icon2_wrap cart-design cart-mainbutton">
                    <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1254/detail" data-product_id="1254">
                        <div class="fa-icon2_item1 p_chousei orangebtn1">
                            <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                        </div>
                        <div class="fa-icon2_item2 orangebtn2">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="course-item courseColorGreen">
                <div class="course-info">
                    <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（福岡）<br />
                    <p>会場：リファレンス駅東ビル<br>時間：10:00 ～ 12:30<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span></p>
                </div>
                <div class="fa-icon2_wrap cart-design cart-mainbutton">
                    <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1256/detail" data-product_id="1256">
                        <div class="fa-icon2_item1 p_chousei lightgreenbtn1">
                            <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                        </div>
                        <div class="fa-icon2_item2 lightgreenbtn2">
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- 全国 Zoom配信 -->
    <section id="mapAreaB" class="zoom-section">
        <map id="national"><!--全国エリア--></map>
        <div class="container">
            <div class="zoom-card bd-lightPink_A">
                <div class="zoom-card-header bg-lightPink_A">
                    <h2 class="zoom-card-title">
                        <i class="fa-regular fa-map"></i>
                        全国 Zoom配信
                    </h2>
                </div>
                <div class="zoom-card-content">
                    <div class="info-box">
                        <h3 class="fColor-lightPink_A">
                            <i class="fa-regular fa-clock"></i>
                            開催日時（受付開始時間）
                        </h3>
                        <p class="titleTxt">2025年2月15日（土）10:00 〜 12:30</p>
                        <small class="txt">（Zoom接続開始 9:30）</small>
                    </div>
                    <div class="info-box .fColor-lightPink_A">
                        <h3 class="fColor-lightPink_A">
                            <i class="fa-solid fa-circle-info"></i>
                            Zoom配信に関する注意事項
                        </h3>
                        <p>
                            スマートフォンやタブレットで講義をご視聴になる場合は、Zoomアプリのインストールとサインアップ（新規登録）が必要です。事前にお済ませいただきますようお願いいたします。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb4Rem relative zindex1">
        <div class="course-item courseColorPink">
            <div class="course-info">
                <i class="fa-solid fa-video mr05Rem"></i>全国 Zoom配信<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付）</span></span>
            </div>
            <div class="fa-icon2_wrap cart-design cart-mainbutton">
                <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1237/detail" data-product_id="1237">
                    <div class="fa-icon2_item1 p_chousei lightpinkbtn1">
                        <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                    </div>
                    <div class="fa-icon2_item2 lightpinkbtn2">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 仙台の対面講座 -->
    <section id="mapAreaB" class="zoom-section">
        <map id="sendai"><!--仙台エリア--></map>
        <div class="container">
            <div class="zoom-card bd-grape">
                <div class="zoom-card-header bg-grape">
                    <h2 class="zoom-card-title">
                        <i class="fa-regular fa-map"></i>
                        対面講座（仙台）
                    </h2>
                </div>
                <div class="zoom-card-content">
                    <div class="info-box">
                        <h3 class="fColor-grape">
                            <i class="fa-regular fa-clock"></i>
                            開催日時（受付開始時間）
                        </h3>
                        <p class="titleTxt">2025年2月15日（土）14:00 ～ 16:30</p>
                        <small class="txt">（会場受付開始 13:30）</small>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-grape">
                            <i class="fa-regular fa-building mr05Rem"></i>
                            会場
                        </h3>
                        <p class="titleTxt">TKP 仙台青葉通カンファレンスセンター</p>
                        <p>（青葉通パークビルディング8階）</p>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-grape">
                            <i class="fa-regular fa-flag mr05Rem"></i>
                            会場アクセス
                        </h3>
                        <p class="inline-block">
                            <ul class="lectureFormat-wrap-list-container">
                                <li class="lectureFormat-wrap-list-container-list">・仙台市営東西線「青葉通一番町駅」より徒歩約1分</li>
                                <li class="lectureFormat-wrap-list-container-list">・「仙台駅」より徒歩約8分</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb4Rem relative zindex1">
        <div class="course-item courseColorPurple">
            <div class="course-info">
                <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（仙台） <br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付き）</span></span>
            </div>
            <div class="fa-icon2_wrap cart-design cart-mainbutton">
                <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1250/detail" data-product_id="1250">
                    <div class="fa-icon2_item1 p_chousei murasaki2btn1">
                        <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                    </div>
                    <div class="fa-icon2_item2 murasaki2btn2">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 対面講座（東京） -->
    <section id="mapAreaB" class="zoom-section">
        <map id="tokyo"><!--東京エリア--></map>
        <div class="container">
            <div class="zoom-card bd-lightBlue_B">
                <div class="zoom-card-header bg-lightBlue_B">
                    <h2 class="zoom-card-title">
                        <i class="fa-regular fa-map"></i>
                        対面講座（東京）
                    </h2>
                </div>
                <div class="zoom-card-content">
                    <div class="info-box">
                        <h3 class="fColor-lightBlue_B">
                            <i class="fa-regular fa-clock"></i>
                            開催日時（受付開始時間）
                        </h3>
                        <p class="titleTxt">2025年2月15日（土）10:00 ～ 12:30</p>
                        <small class="txt">（会場受付開始 9:00）</small>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-lightBlue_B">
                            <i class="fa-regular fa-building mr05Rem"></i>
                            会場
                        </h3>
                        <p class="titleTxt">工学院大学 新宿キャンパス</p>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-lightBlue_B">
                            <i class="fa-regular fa-flag mr05Rem"></i>
                            会場アクセス
                        </h3>
                        <p class="inline-block">
                            <ul class="lectureFormat-wrap-list-container">
                                <li class="lectureFormat-wrap-list-container-list">・JR「新宿駅」西口より徒歩約5分</li>
                                <li class="lectureFormat-wrap-list-container-list">・京王線、小田急線、地下鉄各線「新宿駅」より徒歩約5分</li>
                                <li class="lectureFormat-wrap-list-container-list">・都営大江戸線「都庁前駅」より徒歩約3分</li>
                                <li class="lectureFormat-wrap-list-container-list">・西武新宿線 「西武新宿駅」 より徒歩約 10 分</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb4Rem relative zindex1">
        <div class="course-item courseColorBlue">
            <div class="course-info">
                <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（東京） <br>価格： <span class="fs1_25Rem">5,000円<span>（税込/教材付き）</span></span>
            </div>
            <div class="fa-icon2_wrap cart-design cart-mainbutton">
                <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1252/detail" data-product_id="1252">
                    <div class="fa-icon2_item1 p_chousei lightblue2btn1">
                        <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                    </div>
                    <div class="fa-icon2_item2 lightblue2btn2">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 対面講座（名古屋） -->
    <section id="mapAreaB" class="zoom-section">
        <map id="nagoya"><!--名古屋エリア--></map>
        <div class="container">
            <div class="zoom-card bd-orange_B">
                <div class="zoom-card-header bg-orange_B">
                    <h2 class="zoom-card-title">
                        <i class="fa-regular fa-map"></i>
                        対面講座（名古屋）
                    </h2>
                </div>
                <div class="zoom-card-content">
                    <div class="info-box">
                        <h3 class="fColor-orange_B">
                            <i class="fa-regular fa-clock"></i>
                            開催日時（受付開始時間）
                        </h3>
                        <p class="titleTxt">2025年2月15日（土）15:00 ～ 17:30</p>
                        <small class="txt">（会場受付開始 14:00）</small>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-orange_B">
                            <i class="fa-regular fa-building mr05Rem"></i>
                            会場
                        </h3>
                        <p class="titleTxt">名駅カンファレンスセンター</p>
                        <small class="txt">（名駅前みどりビル5階）</small>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-orange_B">
                            <i class="fa-regular fa-flag mr05Rem"></i>
                            会場アクセス
                        </h3>
                        <p class="inline-block">
                            <ul class="lectureFormat-wrap-list-container">
                                <li class="lectureFormat-wrap-list-container-list">・各線「名古屋駅」桜通口より徒歩約7分</li>
                                <li class="lectureFormat-wrap-list-container-list">・地下鉄「国際センター駅」より徒歩約1分</li>
                                <li class="lectureFormat-wrap-list-container-list">・ユニモール（地下街）12番・14番出口すぐ<br><small>※ビルの東側に「名駅前みどりビル」入口がございます。</small></li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb4Rem relative zindex1">
        <div class="course-item courseColorOrange_B">
            <div class="course-info">
                <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（名古屋）<br>価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付き）</span></span>
            </div>
            <div class="fa-icon2_wrap cart-design cart-mainbutton">
                <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1260/detail" data-product_id="1260">
                    <div class="fa-icon2_item1 p_chousei orange2btn1">
                        <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                    </div>
                    <div class="fa-icon2_item2 orange2btn2">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 対面講座（大阪） -->
    <section id="mapAreaB" class="zoom-section">
        <map id="osaka"><!--大阪エリア--></map>
        <div class="container">
            <div class="zoom-card bd-lightOrange">
                <div class="zoom-card-header bg-lightOrange">
                    <h2 class="zoom-card-title">
                        <i class="fa-regular fa-map"></i>
                        対面講座（大阪）
                    </h2>
                </div>
                <div class="zoom-card-content">
                    <div class="info-box">
                        <h3 class="fColor-lightOrange">
                            <i class="fa-regular fa-clock"></i>
                            開催日時（受付開始時間）
                        </h3>
                        <p class="titleTxt">2025年2月15日（土）10:00 ～ 12:30</p>
                        <small class="txt">（会場受付開始 9:00）</small>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-lightOrange">
                            <i class="fa-regular fa-building mr05Rem"></i>
                            会場
                        </h3>
                        <p class="titleTxt">大阪駅前第 3ビル 17階</p>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-lightOrange">
                            <i class="fa-regular fa-flag mr05Rem"></i>
                            会場アクセス
                        </h3>
                        <p class="inline-block">
                            <ul class="lectureFormat-wrap-list-container">
                                <li class="lectureFormat-wrap-list-container-list">・JR「大阪駅」より徒歩 約8分</li>
                                <li class="lectureFormat-wrap-list-container-list">・阪急線「梅田駅」より徒歩 約10分</li>
                                <li class="lectureFormat-wrap-list-container-list">・地下鉄・私鉄各線「梅田駅」より徒歩 約5分</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb4Rem relative zindex1">
        <div class="course-item courseColorOrange">
            <div class="course-info">
                <p>
                    <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（大阪）<br />価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付き）</span></span>
                </p>
            </div>
            <div class="fa-icon2_wrap cart-design cart-mainbutton">
                <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1254/detail" data-product_id="1254">
                    <div class="fa-icon2_item1 p_chousei orangebtn1">
                        <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                    </div>
                    <div class="fa-icon2_item2 orangebtn2">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <!-- 対面講座（福岡） -->
    <section id="mapAreaB" class="zoom-section">
        <map id="fukuoka"><!--福岡エリア--></map>
        <div class="container">
            <div class="zoom-card bd-lightGreen">
                <div class="zoom-card-header bg-lightGreen">
                    <h2 class="zoom-card-title">
                        <i class="fa-regular fa-map"></i>
                        対面講座（福岡）
                    </h2>
                </div>
                <div class="zoom-card-content">
                    <div class="info-box">
                        <h3 class="fColor-lightGreen">
                            <i class="fa-regular fa-clock"></i>
                            開催日時（受付開始時間）
                        </h3>
                        <p class="titleTxt">2025年2月15日（土）10:00 〜 12:30</p>
                        <small class="txt">（会場受付開始 9:00）</small>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-lightGreen">
                            <i class="fa-regular fa-building mr05Rem"></i>
                            会場
                        </h3>
                        <p class="titleTxt">リファレンス駅東ビル</p>
                    </div>

                    <div class="info-box">
                        <h3 class="fColor-lightGreen">
                            <i class="fa-regular fa-flag mr05Rem"></i>
                            会場アクセス
                        </h3>
                        <p class="inline-block">
                            <ul class="lectureFormat-wrap-list-container">
                                <li class="lectureFormat-wrap-list-container-list">・JR「博多駅」筑紫口より徒歩 約4分</li>
                                <li class="lectureFormat-wrap-list-container-list">・福岡市地下鉄「博多駅」筑紫改札口より徒歩 約4分</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb4Rem relative zindex1">
        <div class="course-item courseColorGreen">
            <div class="course-info">
                <i class="fa-solid fa-people-arrows mr05Rem"></i>対面講座（福岡）<br />価格：<span class="fs1_25Rem">5,000円<span>（税込/教材付き）</span></span></p>
            </div>
            <div class="fa-icon2_wrap cart-design cart-mainbutton">
                <a class="fa-icon2" href="https://moshi.sawakenweb.com/user/lectures/1256/detail" data-product_id="1256">
                    <div class="fa-icon2_item1 p_chousei lightgreenbtn1">
                        <i class="fa-solid fa-cart-shopping"></i>カートに入れる
                    </div>
                    <div class="fa-icon2_item2 lightgreenbtn2">
                        <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                    </div>
                </a>
            </div>
        </div>
    </section>
    <!-- / main content -->
</div>
`;

setupCounter(document.querySelector("#counter"));
