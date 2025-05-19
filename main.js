import { setupCounter } from "./counter.js";

document.querySelector("#mainColumn").innerHTML = `
  <div class="">
    <!-- SCSS => CSS -->
    <link rel="stylesheet" href="./scss/1_zoom_saitama.css" />
    <!-- SCSS => CSS -->

    <!-- main content -->
    <h1 class="main-visual">
              <img
                class="pc"
                src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/zoom_saitama_mainvisual1.jpg"
                alt="埼玉県内在住・通学の看護学生限定 Zoom配信用 変身講座 画像"
              />
              <img
                class="sp"
                src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/sp_zoom_saitama_mainvisual1.jpg"
                alt="埼玉県内在住・通学の看護学生限定 Zoom配信用 変身講座 画像"
              />
            </h1>

            <section class="section-container">
              <section
                class="section-wrapper titleContentTxt relative txtShadow-wLine"
              >
                <p
                  class="pc titleContentTxt-txtArea fwB fs1Rem pt4Rem txtA-Center fColor-Brown"
                >
                  埼玉で生まれ、創業<span class="Point-Num fs1_5Rem fColor-Red"
                    >20</span
                  >年の<span class="borderB-lightPink">歴史と実績</span>を誇る
                  <span class="fs2Rem fColor-pink txtSubMark">さわ研究所</span
                  >が開催する<br />
                  <span class="inline-block mt1Rem dotted-Pink"
                    >受験生が苦手とする分野を<span
                      class="fs1_5Rem fColor-pink exclamationMark"
                      >ぎゅっと</span
                    >詰め込んだ特別な講座です!</span
                  >
                </p>

                <p
                  class="sp titleContentTxt-txtArea fwB fs1Rem pt4Rem txtA-Center fColor-Brown"
                >
                  埼玉で生まれ、創業<span class="Point-Num fs1_5Rem fColor-Red"
                    >20</span
                  >年の<span class="borderB-lightPink">歴史と実績</span>を誇る
                  <span class="fs2Rem fColor-pink txtSubMark">さわ研究所</span
                  >が開催する<br />
                  <span class="inline-block mt1Rem dotted-Pink"
                    >受験生が苦手とする分野を<br /><span
                      class="fs1_5Rem fColor-pink exclamationMark"
                      >ぎゅっと</span
                    >詰め込んだ特別な講座です!</span
                  >
                </p>

                <small class="pc d-block pt1Rem txtA-Center fColor-Brown"
                  >専用掲示板にて講義内での疑問点をご質問いただけます！</small
                >
                <small class="sp d-block pt1Rem txtA-Center fColor-Brown"
                  >専用掲示板にて講義内での疑問点を<br />ご質問いただけます！</small
                >
              </section>

              <section
                class="zoom-saitamaken-color fColor-Brown section-wrapper relative"
              >
                <dl class="class">
                  <dt>
                    <span class="OrangeBox">日程</span>
                  </dt>
                  <dd class="ilustImageBox mb2Rem">
                    <p class="fs2Rem">2024年11月24日（日）</p>
                  </dd>
                </dl>

                <h2 class="section-heading section-inner">内容・時間・価格</h2>
                <div class="rehearsal-info">
                  <div class="lecture-info">
                    <div class="info-table">
                      <table class="info-table-box">
                        <tbody>
                          <tr>
                            <th>内容</th>
                            <th>時間</th>
                            <th colspan="2">価格</th>
                          </tr>

                          <tr>
                            <td>
                              <span
                                class="mb05Rem fwB inline-block border_Yellow"
                                >①心電図〈基本から異常波形まで！〉</span
                              >
                              <p class="fs08Rem">
                                心電図の見方を基本的な波形をはじめとした基礎から丁寧に解説します
                              </p>
                            </td>

                            <td>
                              <time class="fwB">8:50 ～ 10:25</time><br />
                              <small class="fs08Rem"
                                >（Zoom 接続開始 8:30）</small
                              >
                            </td>

                            <td rowspan="3">
                              <span class="fwB inline-block">各 2,000 円 </span
                              ><br />
                              <small class="mb1Rem fs08Rem"
                                >（税込 / 教材付）</small
                              >
                            </td>

                            <td class="cartArea">
                              <a
                                href="https://moshi.sawakenweb.com/user/lectures/1245/detail"
                                data-product_id="1245"
                              >
                                <i
                                  class="mr05Rem fa-solid fa-cart-shopping"
                                ></i>
                                カートに入れる</a
                              >
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <span
                                class="mb05Rem fwB inline-block border_Yellow"
                                >②酸塩基平衡〈アシドーシスが分かる！〉</span
                              >
                              <p class="fs08Rem">
                                アルカローシスとアシドーシスについて再確認した後、関連する疾患を紹介し、看護につなげた解説をします。
                              </p>
                            </td>

                            <td>
                              <time class="fwB">10 : 50 ～ 12 : 25</time><br />
                              <small class="fs08Rem"
                                >（Zoom 接続開始 10:30）</small
                              >
                            </td>

                            <td class="cartArea">
                              <a
                                href="https://moshi.sawakenweb.com/user/lectures/1246/detail"
                                data-product_id="1246"
                              >
                                <i
                                  class="mr05Rem fa-solid fa-cart-shopping"
                                ></i>
                                カートに入れる</a
                              >
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <span
                                class="mb05Rem fwB inline-block border_Yellow"
                                >③消化酵素・消化管ホルモン<br />〈はたらきを完全理解！〉</span
                              >
                              <p class="fs08Rem">
                                消化酵素や消化管ホルモンの特徴やはたらきをおさえた後、国試の過去問題でどのように出題されたかをみていきます。
                              </p>
                            </td>

                            <td>
                              <time class="fwB">13 : 00 ～ 14 : 35</time><br />
                              <small class="fs08Rem"
                                >（Zoom 接続開始 12:40）</small
                              >
                            </td>

                            <td class="cartArea">
                              <a
                                href="https://moshi.sawakenweb.com/user/lectures/1247/detail"
                                data-product_id="1247"
                              >
                                <i
                                  class="mr05Rem fa-solid fa-cart-shopping"
                                ></i>
                                カートに入れる</a
                              >
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <span
                                class="mb05Rem fwB inline-block border_Yellow"
                                >＜Zoom配信＞埼玉県限定<br />変身講座<br />３種セット①②③</span
                              >
                              <p class="fs08Rem">
                                受験生が苦手とする分野をぎゅっと詰め込んだ大好評の講座です！
                              </p>
                            </td>

                            <td>
                              <time class="fwB">8 : 50 ～ 14 : 35</time><br />
                              <small class="fs08Rem"
                                >（Zoom 接続開始 8:30）</small
                              >
                            </td>

                            <td class="mb1Rem">
                              <span class="fwB inline-block">6,000 円 </span
                              ><br />
                              <small class="mb1Rem fs08Rem"
                                >（税込 / 教材付）</small
                              >
                            </td>

                            <td class="cartArea">
                              <a
                                href="https://moshi.sawakenweb.com/user/lectures/1244/detail"
                                data-product_id="1244"
                              >
                                <i
                                  class="mr05Rem fa-solid fa-cart-shopping"
                                ></i>
                                カートに入れる</a
                              >
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <section>
                    <dl class="class">
                      <dt>
                        <span class="OrangeBox">講義形態</span>
                      </dt>
                      <dd class="ilustImageBox mb2Rem">
                        <p class="fs1_5Rem">Zoom 配信</p>
                        <span class="fs08Rem fwN"
                          >スマートフォンやタブレットで講義をご視聴になる場合は、Zoomアプリのインストールとサインアップ（新規登録）が必要です。事前にお済ませいただきますようお願いいたします。</span
                        >
                      </dd>
                      <dt>
                        <span class="OrangeBox">見逃し配信</span>
                      </dt>
                      <dd class="d-block mb2Rem">
                        <ul>
                          <p class="pc fs1_5Rem mb05Rem">
                            2024年11月24日（日）配信直後 ～<br />
                            2024年12月7日（土）まで
                          </p>
                          <p class="sp fs1_5Rem mb05Rem">
                            2024年11月24日（日）<br />配信直後 ～
                            2024年12月7日（土）まで
                          </p>
                          <span class="pc fwN"
                            >開催日当日のご都合がつかない方は、見逃し配信をご利用ください。<br />
                            見逃し配信でご参加の場合、ご質問はお問い合わせフォームより<br />メールにてお送りいただけます。</span
                          >
                          <span class="sp fwN"
                            >開催日当日のご都合がつかない方は、見逃し配信をご利用ください。<br />
                            見逃し配信でご参加の場合、ご質問はお問い合わせフォームよりメールにてお送りいただけます。</span
                          >
                        </ul>
                      </dd>
                      <dt>
                        <span class="OrangeBox">教材</span>
                      </dt>
                      <dd class="pc textInfoArea mb2Rem">
                        <span class="timeLimit d-block fs1_5Rem"
                          >オリジナル教材</span
                        >
                        <span
                          >2024年11月16日（土）からマイページよりダウンロードまたは<br />印刷することができます。</span
                        >
                      </dd>
                      <dd class="sp textInfoArea mb2Rem">
                        <span class="timeLimit d-block fs1_5Rem"
                          >オリジナル教材</span
                        >
                        <span
                          >2024年11月16日（土）からマイページよりダウンロードまたは印刷することができます。</span
                        >
                      </dd>
                    </dl>
                  </section>

                  <section class="section-wrapper testimonials voice-messages">
                    <h2 class="section-heading">受講生の声</h2>
                    <span class="fwB">※原文のまま掲載しています。</span>
                    <div class="testimonial-grid">
                      <div class="testimonial-card">
                        <div class="testimonial-image">
                          <img
                            src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/touki_human_girl02.png"
                            alt="受講生の画像2"
                          />
                        </div>
                        <div class="testimonial-text">
                          <p>
                            心電図が何度聞いてもその場でわかった気になっていましたが、実際心電図の図をみると見方がわからなくなってしまっていましたが、今日の講座の説明がわかりやすく、読み方が理解できました。<br />アシドーシスとアルカローシスも呼吸性と代謝性といろいろごちゃごちゃになっていたのが、すっきりと整理されて理解できました。ありがとうございました。<span
                              >A.Y</span
                            >
                          </p>
                        </div>
                      </div>
                      <div class="testimonial-card">
                        <div class="testimonial-image">
                          <img
                            src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/touki_human_girl03.png"
                            alt="受講生の画像3"
                          />
                        </div>
                        <div class="testimonial-text">
                          <p>
                            要点をまとめて板書に加え、詳しい説明もあり分かりやすかったです。<br />国試に出やすい所や、覚えた方がいい所も分かりやすく、今後役立つと感じた。<span
                              >S.R</span
                            >
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>

              <section class="imageContainer">
                <figurede class="imageContainer--wrapper">
                  <img
                    src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/lucky_hensin01.png"
                    alt="ラッキー変身画像"
                  />
                  <img
                    class="mt1Rem"
                    src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/lucky_ouenTxt1b.png"
                    alt="ラッキー応援画像"
                  />
                </figurede>
              </section>
            </section>
    <!-- / main content -->
  </div>
`;

setupCounter(document.querySelector("#counter"));
