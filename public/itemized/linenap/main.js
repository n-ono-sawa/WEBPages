// SCSS => CSS
import "/scss/style.scss";

document.querySelector("#mainColumn").innerHTML = `
<div class="">
    <!-- main content -->
  <div id="mainColumn">
  <style>
    #mainColumn {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.8;
      color: #333;
      background: #f5f5f5;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      text-align: center;
      margin-bottom: 40px;
      color: #1a4a74;
      font-size: clamp(2rem, 1.8rem + 1vw, 2.5rem);
    }

    .content-section {
      background: white;
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 40px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .section-title {
      font-size: clamp(1.5rem, 1.3rem + 1vw, 1.8rem);
      color: #1a4a74;
      padding-bottom: 15px;
      border-bottom: 2px solid #1a4a74;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
    }

    .section-title i {
      margin-right: 15px;
    }

    .card {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 25px;
      background: #fff;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .card-content {
      flex: 1 1 auto;
      margin-bottom: 20px;
    }

    .card-title {
      font-size: clamp(1.2rem, 1rem + 1vw, 1.4rem);
      color: #1a4a74;
      margin-bottom: 15px;
    }

    .banner {
      background: #e1f3fd;
      padding: 30px;
      border-radius: 12px;
      margin-bottom: 40px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .banner h2 {
      margin-bottom: 15px;
    }

    .banner p {
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .link-button {
      display: inline-block;
      width: 100%;
      padding: 12px 10px;
      background: #1a4a74;
      color: white !important;
      text-decoration: none;
      border-radius: 6px;
      font-size: clamp(1rem, 0.9rem + 0.5vw, 1.1rem);
      text-align: center;
      transition: background-color 0.3s ease;
    }

    .link-button:hover {
      background: #2a5a84;
    }

    .area-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

    p {
      font-size: clamp(1rem, 0.9rem + 0.375vw, 1.1rem);
      margin-bottom: 15px;
    }

    /* 改善した日程表示のスタイル */
    .date {
      background: #f0f8ff;
      color: #1a4a74;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 1rem;
      display: block;
      margin-bottom: 15px;
      border: 1px solid #e1f3fd;
      box-shadow: 0 2px 4px rgba(26,74,116,0.1);
      line-height: 1.6;
    }

    .date i {
      margin-right: 10px;
      color: #1a4a74;
    }

    .date span {
      display: block;
      padding-left: 28px;
      margin-top: 5px;
      color: #1a4a74;
    }

    @media (min-width: 768px) {
      #mainColumn {
        padding: 60px 10px;
      }
      .grid, .area-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
      .area-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

  /* 日程表示のスタイル更新 */
  .card-title {
    font-size: clamp(1.2rem, 1rem + 1vw, 1.4rem);
    color: #1a4a74;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #e1f3fd;
    font-weight: bold;
    position: relative;
  }

  .card-title::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 40%;
    height: 2px;
    background: #1a4a74;
  }

  /* 日程セクションのスタイル強化 */
  .date-section {
    background: #f8faff;
    border-radius: 12px;
    padding: 0 0 20px;
    margin: 20px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    border: 1px solid #e1f3fd;
  }

  .date-heading {
    display: flex;
    align-items: center;
    color: #1a4a74;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px 15px;
    background: #e1f3fd;
    border-radius: 6px 6px 0 0;
    font-size: 1.1rem;
  }

  .date-heading i {
    font-size: 1.2rem;
    margin-right: 12px;
    color: #1a4a74;
  }

  .date-list {
    padding: 0 15px;
  }

  .date-item {
    color: #666;
    margin-bottom: 10px;
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed #e1f3fd;
  }

  .date-item:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
}
  </style>

  <!-- main content -->
  <h1><i class="fas fa-graduation-cap"></i> 2024年度 講座ラインナップ</h1>

  <div class="banner">
    <div class="card-content">
      <h2><i class="fas fa-video"></i> 冬期講習見放題プラン</h2>
      <p>冬期講習の「SAWA OD（動画配信）」と「Zoom 配信」の講座をすべて受講することができるお得なプランです。</p>
    </div>
    <a href="https://www.sawa-kenkyujo.com/2024winter_mihoudai/" class="link-button">詳細を見る</a>
  </div>

  <div class="banner">
    <div class="card-content">
      <h2><i class="fas fa-pencil-alt"></i> 第114回看護国試 Web自己採点</h2>
    </div>
    <a href="https://www.sawa-kenkyujo.com/webjikosaiten114_student/" class="link-button">自己採点する</a>
  </div>

  <div class="content-section">
    <h2 class="section-title"><i class="fas fa-gift"></i> 無料講座 【SAWA OD】</h2>
    <div class="grid">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">合格への鍵</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024goukakuenokagi/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">合格への鍵 埼玉限定版</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024goukakuenokagi_saitama/" class="link-button">詳細を見る</a>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title"><i class="fas fa-calendar-alt"></i> 秋期・12月開催講座</h2>
    <div class="grid">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">必修特訓講座</h3>
          <p>必修問題対策の特別講座です。集中的に学習できます。</p>
          <div class="date-section">
            <div class="date-heading">
              <i class="far fa-calendar"></i>
              開催日程
            </div>
            <div class="date-list">
              <div class="date-item">11月23日（土・祝）</div>
            </div>
          </div>
        </div>
        <a href="https://www.sawa-kenkyujo.com/zoom_2024hissyutokkun/" class="link-button">詳細を見る</a>
      </div>

      <div class="card">
        <div class="card-content">
          <h3 class="card-title">変身講座</h3>
          <p>効果的な学習方法を身につけ、成績アップを目指す講座です。</p>
          <div class="date-section">
            <div class="date-heading">
              <i class="far fa-calendar"></i>
              開催日程
            </div>
            <div class="date-list">
              <div class="date-item">11月24日（日）</div>
            </div>
          </div>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024henshin_saitama" class="link-button">詳細を見る</a>
      </div>

      <div class="card">
        <div class="card-content">
          <h3 class="card-title">まだ間に合う!さわ研講師と師走の6日間</h3>
          <p>年末の集中講座。6日間で効率的に総復習ができます。</p>
          <div class="date-section">
            <div class="date-heading">
              <i class="far fa-calendar"></i>
              開催日程
            </div>
            <div class="date-list">
              <div class="date-item">12月1日（日）</div>
              <div class="date-item">12月7日（土）</div>
              <div class="date-item">12月8日（日）</div>
              <div class="date-item">12月14日（土）</div>
              <div class="date-item">12月15日（日）</div>
              <div class="date-item">12月21日（土）</div>
            </div>
          </div>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_siwasu_muikakan/" class="link-button">詳細を見る</a>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title"><i class="fas fa-snowflake"></i> 冬期講習</h2>
    <div class="grid">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">過去問対策</h3>
          <p>一般・状況設定過去問講座～冬の実践編～</p>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_ippan" class="link-button">SAWA OD（動画配信）</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">桜咲く！単元別講座</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_sakurasaku/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">国試対策総まとめ講座</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_soumatome/" class="link-button">SAWA OD（動画配信）</a>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title"><i class="fas fa-map-marker-alt"></i> 地域別対面講座</h2>
    <div class="area-grid">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">東北エリア（仙台）</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_sendai/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">関東エリア</h3>
          <p>（東京・千葉・神奈川）</p>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_kantou/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">中部エリア（名古屋）</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_chuubu/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">近畿エリア</h3>
          <p>（大阪・神戸・京都）</p>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_kinki/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">中国エリア（広島）</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_hiroshima/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">四国エリア（松山）</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_shikoku/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">九州エリア</h3>
          <p>（福岡・鹿児島）</p>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024winter_kyusyu/" class="link-button">詳細を見る</a>
      </div>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title"><i class="fas fa-play-circle"></i> SAWA OD（動画配信）講座</h2>
    <div class="grid">
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">ナースのたまごクラス</h3>
          <p>既卒生・通信生・現役生、皆様対象の講義動画などが見放題のクラス</p>
        </div>
        <a href="https://www.sawa-kenkyujo.com/nurse_egg2024/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">解剖と疾患と看護がつながる！</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024_kaibou_shikkan_kango/" class="link-button">詳細を見る</a>
      </div>
      <div class="card">
        <div class="card-content">
          <h3 class="card-title">必修対策講座</h3>
        </div>
        <a href="https://www.sawa-kenkyujo.com/2024required_subjects/" class="link-button">詳細を見る</a>
      </div>
    </div>
  </div>

  <div class="content-section">
    <p style="text-align: center;">※各講座お申込みの際には会員登録が必要となります</p>
    <p style="text-align: center;">
      会員登録の流れは<a href="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/sawakenweb-Registration_220902.pdf">こちら</a>
      （リンククリックでPDFがダウンロードできます）
    </p>
  </div>
</div>
  <!-- / main content -->
</div>
`;

setupCounter(document.querySelector("#counter"));
