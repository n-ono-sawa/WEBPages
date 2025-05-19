import "/scss/style.css";

document.querySelector("#mainColumn").innerHTML = `
<div class="l-container">

	<!-- main -->
	<style type="text/css">
		/* コンテナ */
		.book-showcase-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		}

		/* タブナビゲーション */
		.tab-navigation {
		background-color: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(4px);
		padding: 1rem 0;
		margin-bottom: 3rem;
		}

		.tab-buttons {
			display: flex;
			justify-content: center;
			gap: 0.75rem;
			padding: 0 1rem;
		}

		.tab-button {
			position: relative;
			border-radius: 9999px;
			transition: all 0.3s;
			padding: 0.25rem;
			border: none;
			background: transparent;
			cursor: pointer;
		}

		.tab-button.active {
			transform: scale(1.1);
		}

		.tab-button:not(.active):hover {
			background-color: rgba(249, 250, 251, 0.5);
		}

		.tab-icon {
			width: 3rem;
			height: 3rem;
			border-radius: 9999px;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.3s;
			background-color: rgba(243, 244, 246, 1);
		}

		.tab-button.active .tab-icon {
			transform: scale(1.1);
		}

		/* アクセシビリティを向上させるためのフォーカス表示 */
		.tab-button:focus {
			outline: none;
			box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
		}

		/* ホバー時のヒントテキスト (オプション) */
		.tab-button::after {
			content: 'クリックして切替';
			position: absolute;
			width: 6.5rem;
			height: 2rem;
			line-height: 1.5rem;
			top: -35px;
			left: 50%;
			transform: translateX(-50%) translateY(10px);
			background-color: rgba(0, 0, 0, 0.7);
			color: white;
			padding: 4px 8px;
			border-radius: 4px;
			font-size: 10px;
			opacity: 0;
			visibility: hidden;
			transition: all 0.3s;
			pointer-events: none;
		}

		.tab-button:hover::after {
			opacity: 1;
			visibility: visible;
			transform: translateX(-50%) translateY(0);
		}
		

		.tab-button[data-tab="black"].active .tab-icon {
			background-color: rgba(17, 24, 39, 1);
			color: white;
			box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
		}

		.tab-button[data-tab="red"].active .tab-icon {
			background-color: rgba(254, 226, 226, 1);
			color: rgba(225, 29, 72, 1);
		}

		.tab-button[data-tab="blue"].active .tab-icon {
			background-color: rgba(224, 242, 254, 1);
			color: rgba(14, 165, 233, 1);
		}

		.tab-button[data-tab="white"].active .tab-icon {
			background-color: rgba(241, 245, 249, 1);
			color: rgba(100, 116, 139, 1);
		}

		.tab-button[data-tab="note"].active .tab-icon {
			background-color: rgba(254, 249, 195, 1);
			color: rgba(202, 138, 4, 1);
		}

		.book-icon {
		width: 1.25rem;
		height: 1.25rem;
		}

		.tab-button.active .book-icon {
		transform: scale(1.1);
		}

		.tab-label {
		position: absolute;
		bottom: -1.25rem;
		left: 50%;
		transform: translateX(-50%);
		font-size: 0.75rem;
		font-weight: 500;
		white-space: nowrap;
		}

		@media (max-width: 768px) {
			.book-showcase-container {
				padding: 20px 0;
			}
		}

		/* メインコンテンツ */
		.book-content {
		margin-top: 4rem;
		}

		/* 商品画像と詳細レイアウト */
		.book-layout {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 1rem;
			margin-bottom: 3rem;
			max-width: 1200px;
			margin-left: auto;
			margin-right: auto;
			}
	
			/* 左側: 画像セクション */
			.book-images {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
			}
	
			.main-image-container {
				position: relative;
				width: 18rem;
			}
	
			.main-image-button {
				cursor: pointer;
				display: block;
				background: none;
				border: none;
				padding: 0;
			}
	
			.main-image-wrapper {
				position: relative;
				border-radius: 1rem;
				overflow: hidden;
				transform: transition-all duration-500;
				box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
				transition: all 0.5s;
			}
	
			.main-image-wrapper:hover {
			transform: rotate(-2deg) scale(1.05);
			}
	
			.main-image {
				width: 100%;
				height: auto;
				object-fit: cover;
			}
	
			.sample-images {
				display: flex;
				gap: 0.5rem;
				justify-content: space-between;
				width: 18rem;
			}
	
			.sample-image-button {
				width: 92px;
				height: 8rem;
				border-radius: 0.5rem;
				overflow: hidden;
				box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
				transition: all 0.3s;
				border: none;
				padding: 0;
				cursor: pointer;
				background: none;
			}
		
			.sample-image-button:hover {
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
			}
		
			.sample-image {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
	
			/* 右側: 商品情報カード */
			.book-info {
				flex: 1;
			}
	
			.book-info-card {
				overflow: hidden;
				border-radius: 1rem;
				box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
				border: 1px solid rgba(229, 231, 235, 1);
			}
	
			/* 黒本のテーマ */
			.black-theme {
				background: linear-gradient(to bottom right, #1e293b, #0f172a);
				color: white;
			}
	
			/* 標準テーマ */
			.standard-theme {
			background-color: white;
			}
	
			/* ヘッダー */
			.book-header {
			padding: 1.5rem;
			text-align: center;
			}
	
			.black-theme .book-header {
			background: linear-gradient(to right, #f43f5e, #e11d48);
			box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
			}
	
			.standard-theme .book-header {
			background: #273142;
			box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
			color: white;
			}
	
			.book-title {
			font-size: 1.5rem;
			font-weight: 700;
			margin-bottom: 0.25rem;
			color: white;
			text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
			}
	
			.book-subtitle {
			font-size: 1.125rem;
			color: rgba(255, 255, 255, 0.8);
			}

			/* 書籍詳細 */
			.book-details {
				padding: 2rem;
			}
		
			/* 学習情報 */
			.book-stats {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-bottom: 2rem;
			}
	
			.stat-item {
			padding: 1rem;
			border-radius: 0.75rem;
			text-align: center;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
			}
	
			.black-theme .stat-item {
			background-color: rgba(55, 65, 81, 0.5);
			}
	
			.standard-theme .stat-item {
			background-color: rgba(243, 244, 246, 1);
			}
	
			.stat-label {
			font-size: 0.875rem;
			margin-bottom: 0.75rem;
			}
	
			.black-theme .stat-label {
			color: rgba(209, 213, 219, 1);
			}
	
			.standard-theme .stat-label {
			color: rgba(107, 114, 128, 1);
			}
	
			.stat-value {
			font-size: 1.25rem;
			font-weight: 700;
			}
	
			.black-theme .stat-value {
			color: white;
			}
	
			.standard-theme .stat-value {
			color: rgba(17, 24, 39, 1);
			}

			/* 価格セクション - 黒本 */
			.black-price {
			background-color: rgba(31, 41, 55, 1);
			padding: 0.25rem;
			border-radius: 1rem;
			margin-bottom: 2rem;
			transform: transition-all duration-300;
			box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
			transition: all 0.3s;
			}
	
			.black-price .price-inner {
			background: linear-gradient(to bottom right, rgba(55, 65, 81, 1), rgba(31, 41, 55, 1));
			border-radius: 0.75rem;
			padding: 1.5rem;
			border: 1px solid rgba(55, 65, 81, 1);
			}
	
			.price-content {
			text-align: center;
			}
	
			.special-price-label {
			display: inline-block;
			background-color: rgba(225, 29, 72, 1);
			padding: 0.375rem 1.5rem;
			border-radius: 9999px;
			margin-bottom: 1rem;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
			}
	
			.special-price-label span {
			font-size: 0.875rem;
			font-weight: 500;
			color: white;
			}
	
			.price-amount {
			display: flex;
			align-items: baseline;
			justify-content: center;
			gap: 0.25rem;
			margin-bottom: 1rem;
			}
	
			.price-value {
			font-size: 3rem;
			font-weight: 700;
			background: #fff;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			color: transparent;
			}
	
			.price-tax {
			font-size: 0.875rem;
			color: rgba(156, 163, 175, 1);
			}
	
			.support-badge {
			display: inline-flex;
			align-items: center;
			gap: 0.5rem;
			background-color: rgba(55, 65, 81, 1);
			padding: 0.5rem 1rem;
			border-radius: 9999px;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
			}
	
			.support-badge span {
			font-size: 0.875rem;
			font-weight: 500;
			color: rgba(209, 213, 219, 1);
			}
	
			/* 価格セクション - 通常 */
			.regular-price {
			background-color: white;
			text-align: center;
			padding: 1.5rem;
			border-radius: 0.75rem;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
			margin-bottom: 2rem;
			border: 1px solid rgba(229, 231, 235, 1);
			}
	
			.regular-price-label {
			font-size: 0.875rem;
			margin-bottom: 0.5rem;
			color: rgba(107, 114, 128, 1);
			}
	
			.regular-price-amount {
			display: flex;
			align-items: baseline;
			justify-content: center;
			gap: 0.25rem;
			}
	
			.regular-price-value {
			font-size: 2.25rem;
			font-weight: 700;
			color: rgba(17, 24, 39, 1);
			}

			/* 特徴ポイント */
			.book-points {
				display: flex;
				flex-direction: column;
				gap: 0.75rem;
			}
		
			.point-item {
			display: flex;
			align-items: flex-start;
			gap: 0.75rem;
			padding: 0.75rem;
			border-radius: 0.5rem;
			}
	
			.black-theme .point-item {
			background-color: rgba(55, 65, 81, 0.4);
			}
	
			.standard-theme .point-item {
			background-color: rgba(243, 244, 246, 1);
			}
	
			.check-icon {
			width: 1.25rem;
			height: 1.25rem;
			flex-shrink: 0;
			margin-top: 0.125rem;
			}
	
			.black-theme .check-icon {
			color: rgba(251, 113, 133, 1);
			}
	
			.standard-theme .check-icon {
			color: rgba(14, 165, 233, 1);
			}
	
			.point-text {
			color: rgba(229, 231, 235, 1);
			}
	
			.black-theme .point-text {
			color: rgba(229, 231, 235, 1);
			}
	
			.standard-theme .point-text {
			color: rgba(55, 65, 81, 1);
			}
	
			/* ボタン */
			.book-actions {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin-top: 1.25rem;
			}
	
			.cart-button {
			width: 100%;
			padding: 1rem 1.5rem;
			border-radius: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
			transition: all 0.3s;
			border: none;
			cursor: pointer;
			box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
			font-weight: 500;
			font-size: 1rem;
			}
	
			.black-theme .cart-button {
			background-color: rgba(225, 29, 72, 1);
			color: white;
			}
	
			.black-theme .cart-button:hover {
			background-color: rgb(247 56 98);
			transform: translateY(-2px);
			box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
			}
	
			.standard-theme .cart-button {
			background-color: rgba(14, 165, 233, 1);
			color: white;
			}
	
			.standard-theme .cart-button:hover {
			background-color: rgba(2, 132, 199, 1);
			transform: translateY(-2px);
			box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
			}
	
			.cart-icon {
			width: 1.25rem;
			height: 1.25rem;
			}
	
			.sample-button {
				width: 100%;
				border: 1px solid;
				padding: 1rem 1.5rem;
				border-radius: 0.75rem;
				display: flex;
				align-items: center;
				justify-content: center;
				gap: 0.5rem;
				transition: all 0.3s;
				cursor: pointer;
				background: transparent;
				font-weight: 500;
				font-size: 1rem;
			}
	
			.black-theme .sample-button {
				border-color: rgba(75, 85, 99, 1);
				color: rgba(229, 231, 235, 1);
			}
	
			.black-theme .sample-button:hover {
				background-color: rgba(55, 65, 81, 1);
			}
	
			.standard-theme .sample-button {
				border-color: rgba(186, 230, 253, 1);
				color: rgba(14, 165, 233, 1);
			}
	
			.standard-theme .sample-button:hover {
				background-color: rgba(224, 242, 254, 1);
			}
	
			.download-icon {
				width: 1.25rem;
				height: 1.25rem;
			}

			/* セット販売セクション */
			.sets-section {
				margin-top: 5rem;
				}
		
				.section-title {
				font-size: 1.25rem;
				font-weight: 700;
				text-align: center;
				margin-bottom: 2rem;
				}
		
				.book-sets {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				gap: 1.5rem;
				}
		
				.book-set {
				background-color: white;
				border-radius: 0.75rem;
				box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
				padding: 1rem;
				display: flex;
				flex-direction: column;
				height: 100%;
				transition: all 0.3s;
				}
		
				.book-set:hover {
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
				}
		
				.set-title-container {
				height: 3rem;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 0.75rem;
				}
		
				.set-title {
				font-weight: 500;
				color: rgba(17, 24, 39, 1);
				text-align: center;
				}
		
				.set-images {
				margin-bottom: 0.75rem;
				position: relative;
				height: 9rem;
				background-color: rgba(249, 250, 251, 1);
				border-radius: 0.5rem;
				overflow: hidden;
				}
		
				.set-images-container {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100%;
				}
		
				.set-book {
				width: 4rem;
				height: 6rem;
				box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
				border-radius: 0.375rem;
				overflow: hidden;
				position: absolute;
				}
		
				.set-book-1 {
				transform: translateX(-10px) rotate(-6deg);
				z-index: 1;
				}
		
				.set-book-2 {
				transform: translateX(10px) rotate(6deg);
				z-index: 1;
				}
		
				.set-book-3 {
				transform: translateX(0) rotate(0);
				z-index: 1;
				}
		
				.set-book-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
		
				.set-labels {
					margin-bottom: 0.75rem;
					display: flex;
					flex-wrap: wrap;
					gap: 0.25rem;
				}
		
				.set-label {
					font-size: 0.75rem;
					padding: 0 0.5rem;
					line-height: 1.25rem;
					border-radius: 9999px;
				}
		
				.red-label {
					background-color: rgba(254, 226, 226, 1);
					color: rgba(225, 29, 72, 1);
				}
		
				.blue-label {
					background-color: rgba(224, 242, 254, 1);
					color: rgba(14, 165, 233, 1);
				}
		
				.black-label {
					background-color: rgba(17, 24, 39, 1);
					color: white;
				}
		
				.white-label {
					background-color: rgba(241, 245, 249, 1);
					color: rgba(100, 116, 139, 1);
				}
		
				.note-label {
					background-color: rgba(254, 249, 195, 1);
					color: rgba(202, 138, 4, 1);
				}
		
				.set-price-container {
					margin-bottom: 0.75rem;
				}
		
				.set-discount-badge {
					display: flex;
					align-items: flex-start;
					margin-bottom: 0.25rem;
				}
		
				.set-discount-badge span {
					font-size: 0.75rem;
					background-color: rgba(254, 226, 226, 1);
					color: rgba(225, 29, 72, 1);
					padding: 0 0.5rem;
					line-height: 1.25rem;
					border-radius: 9999px;
				}
		
				.set-price {
					display: flex;
					align-items: baseline;
					gap: 0.5rem;
				}
		
				.set-original-price {
					font-size: 0.875rem;
					color: rgba(107, 114, 128, 1);
					text-decoration: line-through;
				}
		
				.set-discount-price {
					font-size: 1.125rem;
					font-weight: 700;
					color: rgba(225, 29, 72, 1);
				}
		
				.set-cart-button {
					margin-top: auto;
					width: 100%;
					padding: 0.5rem;
					font-size: 13px;
					background: #e11d48;
					color: white !important;
					border-radius: 0.5rem;
					box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
					display: flex;
					align-items: center;
					justify-content: center;
					gap: 0.5rem;
					transition: all 0.3s;
					border: none;
					cursor: pointer;
				}
		
				.set-cart-button:hover {
					ox-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
				}

				.set-cart-icon {
					width: 1rem;
					height: 1rem;
				}
		
				/* 関連教材セクション */
				.related-section {
					margin-top: 5rem;
				}
		
				.related-books {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					gap: 1.5rem;
				}
		
				.related-book {
					display: flex;
					flex-direction: column;
					padding: 1rem;
					background-color: white;
					border-radius: 0.75rem;
					box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
					transition: all 0.3s;
					cursor: pointer;
					border: none;
				}
		
				.related-book:hover {
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
					transform: scale(1.05);
				}
		
				.related-book-img {
					width: 100%;
					aspect-ratio: 3/4;
					margin-bottom: 0.75rem;
					border-radius: 0.5rem;
					overflow: hidden;
				}
		
				.related-book-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					transition: all 0.3s;
				}
		
				.related-book:hover .related-book-image {
					transform: scale(1.1);
				}
		
				.related-book-info {
					text-align: center;
				}
		
				.related-book-title {
					font-weight: 500;
					color: rgba(17, 24, 39, 1);
					margin-bottom: 0.5rem;
				}
		
				.related-book-subtitle {
					font-size: 0.875rem;
					color: rgba(107, 114, 128, 1);
					margin-bottom: 0.75rem;
				}
		
				.related-book-price {
					color: rgba(225, 29, 72, 1);
					font-weight: 600;
				}
		
				/* モーダル */
				.image-modal {
					position: fixed;
					inset: 0;
					z-index: 50;
					display: none;
					overflow: visible;
				}
		
				.image-modal.active {
					display: flex;
				}
		
				.modal-overlay {
					position: fixed;
					inset: 0;
					background-color: rgba(0, 0, 0, 0.8);
				}
		
				.modal-container {
					position: relative;
					max-width: 48rem;
					width: 100%;
					margin: auto;
					z-index: 10;
				}
			
				.modal-close {
					position: absolute;
					top: 1rem;
					right: 1rem;
					background-color: white;
					border-radius: 9999px;
					padding: 0.25rem;
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
					z-index: 10;
					border: none;
					cursor: pointer;
				}
			
				.close-icon {
					width: 1.5rem;
					height: 1.5rem;
					color: rgba(17, 24, 39, 1);
				}
			
				.modal-prev,
				.modal-next {
				    display: none;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					background-color: rgba(255, 255, 255, 0.9);
					border-radius: 9999px;
					padding: 0.5rem;
					box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
					z-index: 10;
					border: none;
					cursor: pointer;
					transition: background-color 0.3s;
				}
			
				.modal-prev:hover,
				.modal-next:hover {
					background-color: white;
				}
			
				.modal-prev {
					left: 1rem;
				}
			
				.modal-next {
					right: 1rem;
				}
			
				.chevron-icon {
					width: 1.5rem;
					height: 1.5rem;
					color: rgba(31, 41, 55, 1);
				}
			
				.modal-content {
					background-color: white;
					padding: 1rem;
					border-radius: 0.75rem;
				}
			
				.modal-image {
					width: 50%;
					height: auto;
					margin: 0 auto;
					border-radius: 0.5rem;
					display: grid;
					justify-content: center;
				}
			
				.modal-caption {
					margin-top: 0.75rem;
				}
			
				.modal-title {
					font-weight: 500;
					color: rgba(17, 24, 39, 1);
					font-size: 1.125rem;
				}
			
				.modal-description {
					color: rgba(107, 114, 128, 1);
				}
			
				.modal-nav {
					margin-top: 1rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
			
				.modal-counter {
					font-size: 0.875rem;
					color: rgba(107, 114, 128, 1);
				}
			
				.modal-dots {
					display: flex;
					gap: 0.25rem;
				}
			
				.modal-dot {
					width: 0.5rem;
					height: 0.5rem;
					border-radius: 9999px;
					background-color: rgba(209, 213, 219, 1);
					border: none;
					padding: 0;
					cursor: pointer;
				}
			
				.modal-dot.active {
					background-color: rgba(31, 41, 55, 1);
				}

				/* ユーティリティクラス */
				.hidden {
					display: none;
				}
		
				/* レスポンシブ対応 */
				@media (max-width: 1024px) {
				.book-sets {
					grid-template-columns: repeat(2, 1fr);
				}
				
				.related-books {
					grid-template-columns: repeat(2, 1fr);
				}
				}
		
				@media (max-width: 768px) {
				.modal-image {
					width: 70%;
				}
				.book-layout {
					flex-direction: column;
					align-items: center;
				}
				
				.book-info {
					width: 100%;
				}
				}
		
				@media (max-width: 640px) {
				.book-sets {
					grid-template-columns: 1fr;
				}
				
				.related-books {
					grid-template-columns: 1fr;
				}
				
				.tab-buttons {
					flex-wrap: wrap;
					justify-content: left;
					gap: 1.75rem 1rem;
				}
				}

				/* 教材ごとのリストマーカー色設定 */
				.points-list li:before {
					content: '🐾';
					position: absolute;
					left: 0;
					font-size: 1.2rem;
					color: var(--accent-color, #9370db); /* 教材ごとの色に設定 */
					transform: scaleX(-1);
					display: inline-block;
				}

				/* 黒本のスタイル修正 */
				.black-theme .check-icon {
					color: #9370db; /* 黒本に合う色 */
				}

				.black-theme .book-header {
					background: #7278b2;
					box-shadow: none;
				}

				/* 購入ボタンをアクセントカラーに */
				.purchase-button.paper-button {
					background-color: rgba(225, 29, 72, 1);
					color: #ffffff !important;
					transition: all 0.3s;
				}

				.purchase-button.paper-button:hover {
					background-color: rgb(247 56 98);
					transform: translateY(-2px);
					box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
				}

				/* グラデーションを廃止 */
				.point-header {
					background: var(--accent-color);
					padding: 0.75rem 1.5rem;
					display: grid;
					grid-template-columns: auto 1fr auto;
					align-items: center;
					gap: 1rem;
					max-width: 100%;
					cursor: pointer;
					position: relative;
					box-shadow: none;
				}

				.price-value {
					font-size: 3rem;
					font-weight: 700;
					color: #fff; /* 背景クリップなしの通常テキスト */
					background: none;
					-webkit-background-clip: initial;
					-webkit-text-fill-color: initial;
					background-clip: initial;
				}

						/* 教材特徴紹介のスタイル */
						.book-features {
						background: var(--main-bg-color, #1e1e2e);
						border-radius: 1rem;
						padding: 2rem;
						margin: 2rem auto;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
						color: #ffffff;
						width: 100%;
						}

						.features-title {
						text-align: center;
						font-size: 1.5rem;
						font-weight: 700;
						margin-bottom: 1.5rem;
						color: #ffffff;
						position: relative;
						padding-bottom: 0.75rem;
						}

						.features-title:after {
						content: '';
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						width: 100px;
						height: 3px;
						background: linear-gradient(to right, var(--header-grad-start, #9370db), var(--header-grad-end, #6a5acd));
						}

						.features-overview {
						display: grid;
						grid-template-columns: 3fr 2fr;
						gap: 1.5rem;
						margin-bottom: 3rem;
						background-color: var(--box-bg-color, #2a2a3a);
						border-radius: 0.75rem;
						padding: 1.5rem;
						box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
						max-width: 100%;
						}

						.points-nav {
						width: 100%;
						}

						.points-list {
						list-style: none;
						padding: 0;
						margin: 0;
						}

						.points-list li {
						margin-bottom: 0.75rem;
						position: relative;
						padding-left: 1.75rem;
						}

						.points-list li:before {
						content: '🐾';
						position: absolute;
						left: 0;
						font-size: 1.2rem;
						color: var(--accent-color, #9370db);
						/* 単一の足跡に変更するためのスタイル */
						transform: scaleX(-1);
						display: inline-block;
						}

						.point-link {
						color: #ffffff !important;
						text-decoration: none;
						font-weight: 500;
						transition: color 0.3s;
						font-size: 0.95rem;
						line-height: 1.4;
						display: inline-block;
						}

						.point-link:hover {
						color: var(--accent-color, #a997e8) !important;
						text-decoration: underline;
						}

						.book-preview {
						text-align: center;
						}

						.book-cover {
						max-width: 100%;
						border-radius: 0.5rem;
						box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
						transition: transform 0.3s;
						border: 2px solid var(--badge-bg-color, #332e59);
						}

						.feature-point {
						margin-bottom: 2rem;
						background-color: var(--box-bg-color, #2a2a3a);
						border-radius: 0.75rem;
						overflow: hidden;
						box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
						scroll-margin-top: 2rem;
						max-width: 100%;
						}

						/* CSS だけで開閉式を実装 */
						.point-header {
						background: linear-gradient(to right, var(--header-grad-start, #483d8b), var(--header-grad-end, #6a5acd));
						padding: 0.75rem 1.5rem;
						display: grid;
						grid-template-columns: auto 1fr auto;
						align-items: center;
						gap: 1rem;
						max-width: 100%;
						cursor: pointer;
						position: relative;
						}

						.point-badge {
						background-color: var(--badge-bg-color, #332e59);
						color: #ffffff;
						font-weight: 700;
						padding: 0.25rem 0.75rem;
						border-radius: 0.5rem;
						font-size: 0.95rem;
						display: inline-block;
						}

						.point-title {
						color: #ffffff;
						margin: 0;
						font-size: 1.1rem;
						font-weight: 600;
						}

						.collapse-icon {
						font-size: 1.5rem;
						font-weight: bold;
						color: #ffffff;
						transition: transform 0.3s;
						}

						/* CSS だけでの開閉式の実装 */
						.collapsible-content {
						max-height: 0;
						overflow: hidden;
						transition: max-height 0.3s ease-out;
						}

						.feature-point input[type="checkbox"] {
						display: none;
						}

						.feature-point input[type="checkbox"] ~ .collapsible-content {
						max-height: 0;
						}

						.feature-point input[type="checkbox"]:checked ~ .collapsible-content {
						max-height: 2000px; /* 十分な高さを確保 */
						}

						.feature-point input[type="checkbox"] ~ .point-header .collapse-icon::before {
						content: '+';
						}

						.feature-point input[type="checkbox"]:checked ~ .point-header .collapse-icon::before {
						content: '−';
						}

						/* 初期状態で最初のポイントは開いておく */
						#point1-toggle:checked ~ .collapsible-content {
						max-height: 2000px;
						}

						#point1-toggle ~ .point-header .collapse-icon::before {
						content: '−';
						}

						.point-content-vertical {
						display: grid;
						grid-template-columns: 1fr;
						gap: 1.5rem;
						padding: 1.5rem;
						max-width: 100%;
						}

						.point-image {
						width: 100%;
						}

						.point-img {
						width: 100%;
						border-radius: 0.5rem;
						box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
						border: 1px solid var(--badge-bg-color, #332e59);
						}

						.point-description {
							width: 100%;
							}
	
							.point-feature {
							display: grid;
							grid-template-columns: auto 1fr;
							gap: 0.75rem;
							margin-bottom: 0.75rem;
							align-items: start;
							}
	
							.feature-icon {
							width: 24px;
							height: 24px;
							background-color: var(--accent-color, #9370db);
							color: var(--main-bg-color, #1e1e2e);
							border-radius: 50%;
							display: grid;
							place-items: center;
							font-weight: bold;
							}
	
							.point-feature p {
							margin: 0;
							line-height: 1.5;
							color: #ffffff;
							width: 100%;
							}
	
							.highlight {
							background: linear-gradient(transparent 60%, var(--highlight-color, rgba(106, 90, 205, 0.4)) 40%);
							font-weight: 600;
							padding: 0 0.25rem;
							color: #ffffff;
							}
	
							.purchase-section {
							margin-top: 3rem;
							text-align: center;
							max-width: 100%;
							}
	
							.purchase-options {
								display: grid;
								grid-template-columns: 1fr 1fr;
								gap: 1.5rem;
								margin: 0 auto;
							}
	
							.purchase-button {
							display: grid;
							grid-template-columns: auto 1fr;
							align-items: center;
							gap: 0.75rem;
							padding: 1rem;
							border-radius: 0.75rem;
							font-weight: 600;
							text-decoration: none;
							transition: all 0.3s;
							box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
							min-width: 180px;
							max-width: 100%;
							justify-content: center;
							}
	
							.paper-button {
							background-color: var(--primary-btn-color, #6a5acd);
							color: #ffffff !important;
							}
	
							.paper-button:hover {
							background-color: var(--primary-btn-hover, #483d8b);
							transform: translateY(-2px);
							box-shadow: 0 6px 10px -3px rgba(0, 0, 0, 0.3);
							}
	
							.digital-button {
							background-color: var(--secondary-btn-color, #332e59);
							color: #ffffff !important;
							}
	
							.digital-button:hover {
							background-color: var(--secondary-btn-hover, #29274c);
							transform: translateY(-2px);
							box-shadow: 0 6px 10px -3px rgba(0, 0, 0, 0.3);
							}
	
							.cart-icon, .ebook-icon {
							width: 1.25rem;
							height: 1.25rem;
							}
	
							/* レスポンシブ対応 */
						@media (max-width: 768px) {
							.features-overview {
								grid-template-columns: 1fr;
							}
	
							.book-preview {
								margin-top: 1.5rem;
								text-align: center;
							}
	
							.book-cover {
								max-width: 180px;
							}
	
							.point-content-vertical {
								grid-template-columns: 1fr;
							}
							
							.point-image {
								margin-bottom: 1rem;
							}
							}
	
							@media (max-width: 576px) {
							.book-features {
								padding: 1.5rem 1rem;
							}
							
							.point-header {
								grid-template-columns: auto 1fr auto;
								gap: 0.5rem;
							}
							
							.point-badge {
								font-size: 0.85rem;
								padding: 0.2rem 0.5rem;
							}
							
							.point-title {
								font-size: 0.95rem;
							}
							}
			</style>
		
		
			<div class="application">
				<div class="container">
					<div class="content">
						<!-- content -->
						<div class="content-title">
							<h2 class="title"><span>教材紹介</span></h2>
						</div>
						
						<div class="book-showcase-container">
							<!-- タブナビゲーション -->
							<div class="tab-navigation">
								<div class="tab-buttons">
								<button data-tab="black" class="tab-button active">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
									</div>
									<span class="tab-label">黒本</span>
								</button>
								<button data-tab="red" class="tab-button">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
									</div>
									<span class="tab-label">赤本</span>
								</button>
								<button data-tab="blue" class="tab-button">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
									</div>
									<span class="tab-label">青本</span>
								</button>
								<button data-tab="note" class="tab-button">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
									</div>
									<span class="tab-label">解剖ノート</span>
								</button>
								<button data-tab="white" class="tab-button">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
									</div>
									<span class="tab-label">白本</span>
								</button>
								<button data-tab="explanation" class="tab-button">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
									</div>
									<span class="tab-label">全問解説集</span>
								</button>
								<button data-tab="disease" class="tab-button">
									<div class="tab-icon">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="book-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
									</div>
									<span class="tab-label">疾患本</span>
								</button>
								
								</div>
							</div>
	
							<!-- メインコンテンツ -->
						<div class="book-content">
							<!-- 商品画像と詳細セクション -->
							<div class="book-layout">
							<!-- 左側: メイン画像とサンプル画像 -->
							<div class="book-images">
								<!-- メイン画像 -->
								<div class="main-image-container">
									<button class="main-image-button">
										<div class="main-image-wrapper">
										<img id="main-book-image" src="" alt="" class="main-image">
										</div>
									</button>
								</div>
								
								<!-- サンプル画像（横並び） -->
								<div id="sample-images" class="sample-images">
								<button class="sample-image-button" data-index="0" data-src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png" data-alt="目次ページサンプル" data-desc="章立てが明確で、探しやすい目次構成">
									<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png" alt="目次ページサンプル" class="sample-image">
								</button>
								<button class="sample-image-button" data-index="1" data-src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png" data-alt="解説ページサンプル" data-desc="わかりやすい図解入りの丁寧な解説">
									<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png" alt="解説ページサンプル" class="sample-image">
								</button>
								<button class="sample-image-button" data-index="2" data-src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png" data-alt="問題ページサンプル" data-desc="本番を想定した実践的な問題">
									<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png" alt="問題ページサンプル" class="sample-image">
								</button>
								</div>
							</div>
							
							<!-- 右側: 商品情報カード -->
							<div class="book-info">
								<div id="book-info-card" class="book-info-card black-theme">
								<!-- ヘッダー -->
								<div class="book-header">
									<h1 id="book-title" class="book-title">黒本</h1>
									<p id="book-subtitle" class="book-subtitle">確実な合格への最短ルート</p>
								</div>
	
								<!-- コンテンツ -->
								<div class="book-details">
									<!-- 学習情報 -->
									<div class="book-stats">
									<div class="stat-item">
										<!-- <p class="stat-label">学習時間目安</p> -->
										<p id="book-study-time" class="stat-value"></p>
									</div>
									<div class="stat-item">
										<p class="stat-label"><i class="fa-brands fa-youtube"></i>動画でみる教材の特徴</p>
										<p id="book-level" class="stat-value">★★★★☆</p>
									</div>
									</div>
	
									<!-- 価格セクション - 黒本用 -->
									<div id="black-price-section" class="price-section black-price">
									<div class="price-inner">
										<div class="price-content">
											<!--
											<div class="special-price-label">
												<span>応援価格</span>
											</div>
											-->
										
											<div class="price-amount">
												<div class="support-badge">
													<span>紙の書籍</span>
												</div>
												<span class="price-value">¥7,800</span>
												<span class="price-tax">(税込)</span>
											</div>
	
											
											<div class="price-amount">
												<div class="support-badge">
													<span>電子書籍</span>
												</div>
												<span class="price-value">¥4,980</span>
												<span class="price-tax">(税込)</span>
											</div>
	
											
										</div>
									</div>
									</div>
	
									<!-- 価格セクション - その他の本用 -->
									<div id="regular-price-section" class="price-section regular-price hidden">
									<p class="regular-price-label">定価</p>
									<div class="regular-price-amount">
										<span id="book-price" class="regular-price-value">¥2,800</span>
										<span class="price-tax">(税込)</span>
									</div>
									</div>
	
									<!-- 特徴ポイント -->
									<div id="book-points" class="book-points">
									<!-- ポイントは動的に生成されます -->
									</div>
	
									<!-- ボタン -->
									<div class="book-actions">
									<a href="/cart" id="add-to-cart-button" class="cart-button">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cart-icon"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
										カートに入れる
									</a>
									<a href="https://www.sawa-kenkyujo.com/tamesiyomi_kurohon/" id="sample-button" class="sample-button" target="_blank">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="download-icon"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
										サンプルを見る
									</a>
									</div>
								</div>
								</div>
							</div>
							</div>
	
							<div id="book-features" class="book-features">
							<h3 class="features-title">さわ研の黒本が選ばれる6つの理由</h3>
							
							<!-- リストと教材写真の配置 -->
							<div class="features-overview">
								<div class="points-nav">
								<ul class="points-list">
									<li><a href="#point1" class="point-link">黒本には豪華な特典が満載！</a></li>
									<li><a href="#point2" class="point-link">第83回から第114回までの良問や重要な問題を約3,700問掲載！</a></li>
									<li><a href="#point3" class="point-link">薄くて持ち運びに便利な7領域13分冊！</a></li>
									<li><a href="#point4" class="point-link">疾患ごとに問題を掲載。繰り返し解くことで苦手克服！</a></li>
									<li><a href="#point5" class="point-link">正答率を掲載！</a></li>
									<li><a href="#point6" class="point-link">重要箇所はPoint！で詳しく解説！</a></li>
								</ul>
								</div>
								<div class="book-preview">
								<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/kurohon_cover1.png" alt="黒本表紙" class="book-cover">
								</div>
							</div>
	
							<!-- ポイント1 -->
							<div id="point1" class="feature-point">
								<input type="checkbox" id="point1-toggle" checked>
								<label for="point1-toggle" class="point-header">
								<div class="point-badge">Point 1</div>
								<h4 class="point-title">黒本には豪華な特典が満載！</h4>
								<div class="collapse-icon"></div>
								</label>
								<div class="collapsible-content">
								<div class="point-content-vertical">
									<div class="point-image">
									<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point1.jpg" alt="特典が満載" class="point-img">
									</div>
									<div class="point-description">
									<div class="point-feature">
										<div class="feature-icon">1</div>
										<p>掲載問題約3,700問中 <span class="highlight">300問に解説動画付き！</span></p>
									</div>
									<div class="point-feature">
										<p>・ 正答率の低い問題や、学生の皆さんからよく質問される問題を1問ずつ解説します。</p><br>
										<div><a href="">▶ サンプル動画はこちら</a></div>
									</div>
									<div class="point-feature">
										<div class="feature-icon">2</div>
										<p>黒本購入者限定 <span class="highlight">マンスリー講座付き</span>（動画配信/全7回）</p>
									</div>
									<div class="point-feature">
										<p>・ 黒本のご購入者限定の国試対策講義を無料でご視聴いただけます。</p><br>
										<p>・ 5月～12月にかけて月に1回、1コマ45分x3コマの講義を配信いたします。<small>※8月を除く。</small></p><br>
										<div><span class="highlight">【配信月】5～12月 1コマ45分 x 3コマ x 7回 = 全21コマ</span></div>
									</div>
									</div>
								</div>
								</div>
							</div>
	
							<!-- ポイント2 -->
							<div id="point2" class="feature-point">
								<input type="checkbox" id="point2-toggle">
								<label for="point2-toggle" class="point-header">
								<div class="point-badge">Point 2</div>
								<h4 class="point-title">第83回から第114回までの良問や重要な問題を約3,700問掲載！</h4>
								<div class="collapse-icon"></div>
								</label>
								<div class="collapsible-content">
								<div class="point-content-vertical">
									<div class="point-image">
									<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point2.jpg" alt="過去問掲載" class="point-img">
									</div>
									<div class="point-description">
									<div class="point-feature">
										<div class="feature-icon">✓</div>
										<p>看護師国家試験では、過去に出題された問題が繰り返し出題される傾向があります。<br>
										このため、過去問題を解くことで、国試に直結する知識を効果的かつ効率的に吸収することができます。</p><br>
										<p>「なぜ、3,700問も載せているのですか？多すぎませんか？」と質問いただくことがありますが、多くの過去問題に触れ、解くことで自然と暗記できます。</p><br>
										<p>1日20門ずつ解いて約半年、早めのスタートを切ることこそ国試合格への最大の近道です。<br>1日でも早く取り掛かり、国試試験合格を掴み取りましょう!</p>
									</div>
									</div>
								</div>
								</div>
							</div>

							<!-- ポイント3 -->
						<div id="point3" class="feature-point">
							<input type="checkbox" id="point3-toggle">
							<label for="point3-toggle" class="point-header">
							<div class="point-badge">Point 3</div>
							<h4 class="point-title">薄くて持ち運びに便利な7領域13分冊！</h4>
							<div class="collapse-icon"></div>
							</label>
							<div class="collapsible-content">
							<div class="point-content-vertical">
								<div class="point-image">
								<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point3.jpg" alt="持ち運びに便利" class="point-img">
								</div>
								<div class="point-description">
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>持ち運びに便利なように分冊にしています。<br>領域により1冊の厚みは異なりますが、<br>
									例えば、母性の問題編は約400問の掲載がありながら約4mmの薄さなので実習の際にも持ち歩いていただけます。</p><br>
									<p>また、問題編と解答編が別冊であるため試験感覚で集中して問題を解くことができ、解説を横に置いて確認しながら学習することができます。</p><br>
									<p>※ll賞の社会保険制度は問題編と解答編を1冊にまとめています。</p>
								</div>
								</div>
							</div>
							</div>
						</div>

						<!-- ポイント4 -->
						<div id="point4" class="feature-point">
							<input type="checkbox" id="point4-toggle">
							<label for="point4-toggle" class="point-header">
							<div class="point-badge">Point 4</div>
							<h4 class="point-title">疾患ごとに問題を掲載。繰り返し解くことで苦手克服！</h4>
							<div class="collapse-icon"></div>
							</label>
							<div class="collapsible-content">
							<div class="point-content-vertical">
								<div class="point-image">
								<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point4.jpg" alt="疾患ごとの問題" class="point-img">
								</div>
								<div class="point-description">
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>国家試験では疾患についても様々な角度から出題されます。<br>
									1つの疾患に対して類題をまとめて掲載する「トレーニング式」をとっている黒本なら、<br>
									疾患についてさまざまな例に触れることができます。例えば、「統合失調症」</p>
								</div>
								</div>
							</div>
							</div>
						</div>

						<!-- ポイント5 -->
						<div id="point5" class="feature-point">
							<input type="checkbox" id="point5-toggle">
							<label for="point5-toggle" class="point-header">
							<div class="point-badge">Point 5</div>
							<h4 class="point-title">正答率を掲載！</h4>
							<div class="collapse-icon"></div>
							</label>
							<div class="collapsible-content">
							<div class="point-content-vertical">
								<div class="point-image">
								<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point5.jpg" alt="正答率掲載" class="point-img">
								</div>
								<div class="point-description">
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>黒本では、第104回以降の問題に正答率を掲載しています。</p>
								</div>
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>約1万人の受験生のデータを分析した正答率を記載してあるため、各設問に難易度がわかるのはもちろん、</p>
								</div>
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>全体の受験生と比べて自分は何が苦手なのか、あるいは得意なのか、学習における自己分析ができます。</p>
								</div>
								</div>
							</div>
							</div>
						</div>

						<!-- ポイント6 -->
						<div id="point6" class="feature-point">
							<input type="checkbox" id="point6-toggle">
							<label for="point6-toggle" class="point-header">
							<div class="point-badge">Point 6</div>
							<h4 class="point-title">重要箇所はPoint！で詳しく解説！</h4>
							<div class="collapse-icon"></div>
							</label>
							<div class="collapsible-content">
							<div class="point-content-vertical">
								<div class="point-image">
								<img src="https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point6.jpg" alt="ポイント解説" class="point-img">
								</div>
								<div class="point-description">
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>黒本は、豊富なイラストを交え詳しくポイントを解説します。</p>
								</div>
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>解説には、重要ポイントが随所に記載っているので、「何が問題で大事なのか」が一目でわかります。</p>
								</div>
								<div class="point-feature">
									<div class="feature-icon">✓</div>
									<p>豊富な図解と明瞭な解説で国家試験合格に必要な知識を着実に身につけることができます。</p>
								</div>
								</div>
							</div>
							</div>
						</div>

						<!-- 購入ボタン -->
						<div class="purchase-section">
							<div class="purchase-options">
							<a href="/cart" class="purchase-button paper-button" data-product="book">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cart-icon"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
								書籍版をカートに入れる
							</a>
							<a href="https://www.sawa-kenkyujo.com/e_book_text/#denshi_kuro" class="purchase-button digital-button" data-product="ebook">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ebook-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
								電子版のご案内はこちら
							</a>
							</div>
						</div>
						</div>

						<!-- セット販売セクション -->
						<div class="sets-section">
						<h2 class="section-title">【セット販売】</h2>
						<div class="book-sets">
							<!-- セット1: 赤本、青本セット -->
							<div class="book-set">
							<!-- タイトル -->
							<div class="set-title-container">
								<h3 class="set-title">赤本、青本セット</h3>
							</div>
							
							<!-- セット表示 -->
							<div class="set-images">
								<div class="set-images-container">
								<div class="set-book set-book-1">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/akahon_2026.jpg" alt="赤本" class="set-book-image">
								</div>
								<div class="set-book set-book-2">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/aohon_2026.jpg" alt="青本" class="set-book-image">
								</div>
								</div>
							</div>
							
							<!-- ラベル -->
							<div class="set-labels">
								<span class="set-label red-label">赤本</span>
								<span class="set-label blue-label">青本</span>
							</div>

							<!-- 価格表示 -->
							<div class="set-price-container">
								<div class="set-discount-badge">
								<span>お得</span>
								</div>
								<div class="set-price">
								<span class="set-original-price">¥5,600</span>
								<span class="set-discount-price">¥4,900</span>
								</div>
							</div>
							
							<a href="/cart" class="set-cart-button">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="set-cart-icon"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
								カートに入れる
							</a>
							</div>

							<!-- セット2: 赤本、黒本セット -->
							<div class="book-set">
							<div class="set-title-container">
								<h3 class="set-title">赤本、黒本セット</h3>
							</div>
							
							<div class="set-images">
								<div class="set-images-container">
								<div class="set-book set-book-1">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/akahon_2026.jpg" alt="赤本" class="set-book-image">
								</div>
								<div class="set-book set-book-2">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/kurohon_seijin_omote.png" alt="黒本" class="set-book-image">
								</div>
								</div>
							</div>
							
							<div class="set-labels">
								<span class="set-label red-label">赤本</span>
								<span class="set-label black-label">黒本</span>
							</div>

							<div class="set-price-container">
								<div class="set-discount-badge">
								<span>お得</span>
								</div>
								<div class="set-price">
								<span class="set-original-price">¥6,600</span>
								<span class="set-discount-price">¥6,100</span>
								</div>
							</div>
							
							<a href="/cart" class="set-cart-button">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="set-cart-icon"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
								カートに入れる
							</a>
							</div>

							<!-- セット3: 青本、黒本セット -->
							<div class="book-set">
							<div class="set-title-container">
								<h3 class="set-title">青本、黒本セット</h3>
							</div>
							
							<div class="set-images">
								<div class="set-images-container">
								<div class="set-book set-book-1">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/aohon_2026.jpg" alt="青本" class="set-book-image">
								</div>
								<div class="set-book set-book-2">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/kurohon_seijin_omote.png" alt="黒本" class="set-book-image">
								</div>
								</div>
							</div>
							
							<div class="set-labels">
								<span class="set-label blue-label">青本</span>
								<span class="set-label black-label">黒本</span>
							</div>

							<div class="set-price-container">
								<div class="set-discount-badge">
								<span>お得</span>
								</div>
								<div class="set-price">
								<span class="set-original-price">¥6,600</span>
								<span class="set-discount-price">¥6,100</span>
								</div>
							</div>
							
							<a href="/cart" class="set-cart-button">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="set-cart-icon"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
								カートに入れる
							</a>
							</div>

							<!-- セット4: 赤本、青本、黒本セット -->
							<div class="book-set">
							<div class="set-title-container">
								<h3 class="set-title">赤本、青本、黒本セット</h3>
							</div>
							
							<div class="set-images">
								<div class="set-images-container">
								<div class="set-book set-book-1">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/akahon_2026.jpg" alt="赤本" class="set-book-image">
								</div>
								<div class="set-book set-book-2">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/aohon_2026.jpg" alt="青本" class="set-book-image">
								</div>
								<div class="set-book set-book-3">
									<img src="https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/kurohon_seijin_omote.png" alt="黒本" class="set-book-image">
								</div>
								</div>
							</div>
							
							<div class="set-labels">
								<span class="set-label red-label">赤本</span>
								<span class="set-label blue-label">青本</span>
								<span class="set-label black-label">黒本</span>
							</div>

							<div class="set-price-container">
								<div class="set-discount-badge">
								<span>お得</span>
								</div>
								<div class="set-price">
								<span class="set-original-price">¥9,400</span>
								<span class="set-discount-price">¥8,500</span>
								</div>
							</div>
							
							<a href="/cart" class="set-cart-button">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="set-cart-icon"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
								カートに入れる
							</a>
							</div>
						</div>
						</div>

						<!-- 関連教材セクション -->
						<div class="related-section">
						<h2 class="section-title">関連教材ラインナップ</h2>
						<div class="related-books" id="related-books">
							<!-- 関連教材は動的に生成されます -->
						</div>
						</div>
					</div>

					<!-- 拡大画像モーダル -->
					<div id="image-modal" class="image-modal">
						<div class="modal-overlay"></div>
						<div class="modal-container">
						<button class="modal-close">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="close-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
						</button>
						
						<button class="modal-prev">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><polyline points="15 18 9 12 15 6"></polyline></svg>
						</button>
						
						<button class="modal-next">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="chevron-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
						</button>
						
						<div class="modal-content">
							<img id="modal-image" src="" alt="" class="modal-image">
							<div class="modal-caption">
							<h3 id="modal-title" class="modal-title"></h3>
							<p id="modal-description" class="modal-description"></p>
							</div>
							
							<div class="modal-nav">
							<p id="modal-counter" class="modal-counter">1 / 4</p>
							<div id="modal-dots" class="modal-dots">
								<!-- ドットは動的に生成されます -->
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<!-- / content -->
				
			</div>
			[sidebar]
		</div>
	</div>
    <!-- / main -->
</div>
`;

// JavaScript
document.addEventListener('DOMContentLoaded', function() {

	// 書籍データ
	const booksData = {
	// 黒本データ
	  black: {
		title: "黒本",
		subtitle: "実習も国試もこの1冊で!",
		price: "¥7,800",
		level: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/162kh1QNXkY" title="黒本の紹介" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
		studyTime: `<div class="study-time-title">これで完璧!</div>
<div class="study-time-subtitle">看護国試過去問完全攻略集</div>
<div class="study-time-year">第115回（2026年実施）対策</div>`,
		points: [
		  "最新試験に完全対応",
		  "丁寧な解説で確実に理解",
		  "実践問題で実力アップ",
		  "オンライン教材付き"
		],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/kurohon_cover1.png",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "目次ページサンプル",
			description: "章立てが明確で、探しやすい目次構成"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "わかりやすい図解入りの丁寧な解説"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "問題ページサンプル",
			description: "本番を想定した実践的な問題"
		  }*/
		]
	  },
	  // 赤本データ
	  red: {
		title: "赤本",
		subtitle: "基礎から応用まで",
		price: "¥2,800",
		level: "★★★☆☆",
		studyTime: `<div class="study-time-title">基礎から応用まで</div>
<div class="study-time-subtitle">着実に実力をつける</div>
<div class="study-time-year">学習期間目安：2ヶ月</div>`,
		points: ["基礎的な内容をカバー", "練習問題で理解度チェック"],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/akahon_2026.jpg",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "目次ページサンプル",
			description: "基礎から段階的に学べる構成"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "初心者にもわかりやすい解説"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "問題ページサンプル",
			description: "基礎を固める練習問題"
		  }*/
		]
	  },

	  // 青本データ
	  blue: {
		title: "青本",
		subtitle: "実践力を養う",
		price: "¥2,800",
		level: "★★★★☆",
		studyTime: `<div class="study-time-title">実践力を養う</div>
<div class="study-time-subtitle">より高度な問題にチャレンジ</div>
<div class="study-time-year">学習期間目安：2.5ヶ月</div>`,
		points: ["実践的な問題を収録", "詳細な解説付き"],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/aohon_2026.jpg",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "目次ページサンプル",
			description: "実践力が身につく構成"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "詳細な解説で理解を深める"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "問題ページサンプル",
			description: "応用力が試される問題"
		  }*/
		]
	  },
	  // 白本データ
	  white: {
		title: "白本",
		subtitle: "はじめの一歩",
		price: "¥2,500",
		level: "★★☆☆☆",
		studyTime: `<div class="study-time-title">はじめの一歩</div>
<div class="study-time-subtitle">基礎から学ぶ</div>
<div class="study-time-year">学習期間目安：1.5ヶ月</div>`,
		points: ["初学者向けの解説", "イラストで理解を促進"],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/白本400.png",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "目次ページサンプル",
			description: "シンプルで理解しやすい構成"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "初心者にもわかりやすいイラスト解説"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "問題ページサンプル",
			description: "基礎を固める練習問題"
		  }*/
		]
	  },
	  // 解剖データ
	  note: {
		title: "解剖ノート",
		subtitle: "ポイントを図解で理解",
		price: "¥1,800",
		level: "★★★☆☆",
		studyTime: `<div class="study-time-title">図解で理解</div>
<div class="study-time-subtitle">重要ポイントを整理</div>
<div class="study-time-year">学習期間目安：1ヶ月</div>`,
		points: ["図解でわかりやすく解説", "重要ポイントを整理"],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/解剖ノート第3版表紙_b400.png",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "図解ページサンプル",
			description: "視覚的に理解できる図解"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "簡潔でポイントを押さえた解説"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "一覧ページサンプル",
			description: "重要事項をまとめた一覧表"
		  }*/
		]
	  },
	  // 全問解説集
	  explanation: {
		title: "第114回看護国試全問解説集",
		subtitle: "2025年2月実施の「第114回看護師国家試験」問題を全問掲載",
		price: "¥2,500",
		level: "★★☆☆☆",
		studyTime: `<div class="study-time-title">はじめの一歩</div>
<div class="study-time-subtitle">基礎から学ぶ</div>
<div class="study-time-year">学習期間目安：1.5ヶ月</div>`,
		points: ["初学者向けの解説", "イラストで理解を促進"],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/0212_第114回看護国試全問解説集.png",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "目次ページサンプル",
			description: "シンプルで理解しやすい構成"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "初心者にもわかりやすいイラスト解説"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "問題ページサンプル",
			description: "基礎を固める練習問題"
		  }*/
		]
	  },
	  // 疾患本
	  disease: {
		title: "看護国試によく出る疾患BEST10【疾患本】",
		subtitle: "間違えたくない問題を必ず解く！",
		price: "¥2,500",
		level: "★★☆☆☆",
		studyTime: `<div class="study-time-title">はじめの一歩</div>
<div class="study-time-subtitle">基礎から学ぶ</div>
<div class="study-time-year">学習期間目安：1.5ヶ月</div>`,
		points: ["初学者向けの解説", "イラストで理解を促進"],
		image: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/2017/08/2017shikkan.png",
		detailImages: [
		  /*{
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "目次ページサンプル",
			description: "シンプルで理解しやすい構成"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "解説ページサンプル",
			description: "初心者にもわかりやすいイラスト解説"
		  },
		  {
			src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
			alt: "問題ページサンプル",
			description: "基礎を固める練習問題"
		  }*/
		]
	  },
	};

	// 各教材の特徴データを定義
  const featuresData = {
    // 黒本の特徴データ
    black: {
      title: "さわ研の黒本が選ばれる6つの理由",
      mainColor: "#1e1e2e", // 背景色：濃い紺色
      accentColor: "#9370db", // アクセント色：紫
      headerGradStart: "#483d8b", // ヘッダーグラデーション開始色
      headerGradEnd: "#6a5acd",   // ヘッダーグラデーション終了色
      badgeBgColor: "#332e59",   // バッジ背景色
      highlightColor: "rgba(106, 90, 205, 0.4)", // ハイライト色
      primaryBtnColor: "#6a5acd", // プライマリーボタン色
      primaryBtnHover: "#483d8b", // プライマリーボタンホバー色
      secondaryBtnColor: "#332e59", // セカンダリーボタン色
      secondaryBtnHover: "#29274c", // セカンダリーボタンホバー色
      boxBgColor: "#2a2a3a", // ボックス背景色
      points: [
        { 
          title: "黒本には豪華な特典が満載！",
          desc: [
            {
              icon: "1",
              text: "掲載問題約3,700問中 <span class='highlight'>300問に解説動画付き！</span>"
            },
            {
              icon: "2",
              text: "黒本購入者限定 <span class='highlight'>マンスリー講座付き</span>（動画配信/全7回）"
            }
          ]
        },
        { 
          title: "第83回から第114回までの良問や重要な問題を約3,700問掲載！",
          desc: [
            {
              icon: "✓",
              text: "看護師国家試験では、過去に出題された問題が繰り返し出題される傾向があります。<br>このため、過去問題を解くことで、国試に直結する知識を効果的かつ効率的に吸収することができます。"
            }
          ]
        },
        { 
          title: "薄くて持ち運びに便利な7領域13分冊！",
          desc: [
            {
              icon: "✓",
              text: "持ち運びに便利なように分冊にしています。<br>領域により1冊の厚みは異なりますが、<br>例えば、母性の問題編は約400問の掲載がありながら約4mmの薄さなので実習の際にも持ち歩いていただけます。"
            }
          ]
        },
        { 
          title: "疾患ごとに問題を掲載。繰り返し解くことで苦手克服！",
          desc: [
            {
              icon: "✓",
              text: "国家試験では疾患についても様々な角度から出題されます。<br>1つの疾患に対して類題をまとめて掲載する「トレーニング式」をとっている黒本なら、<br>疾患についてさまざまな例に触れることができます。例えば、「統合失調症」"
            }
          ]
        },
        { 
          title: "正答率を掲載！",
          desc: [
            {
              icon: "✓",
              text: "黒本では、第104回以降の問題に正答率を掲載しています。"
            },
            {
              icon: "✓",
              text: "約1万人の受験生のデータを分析した正答率を記載してあるため、各設問に難易度がわかるのはもちろん、"
            },
            {
              icon: "✓",
              text: "全体の受験生と比べて自分は何が苦手なのか、あるいは得意なのか、学習における自己分析ができます。"
            }
          ]
        },
        { 
          title: "重要箇所はPoint！で詳しく解説！",
          desc: [
            {
              icon: "✓",
              text: "黒本は、豊富なイラストを交え詳しくポイントを解説します。"
            },
            {
              icon: "✓",
              text: "解説には、重要ポイントが随所に記載っているので、「何が問題で大事なのか」が一目でわかります。"
            },
            {
              icon: "✓",
              text: "豊富な図解と明瞭な解説で国家試験合格に必要な知識を着実に身につけることができます。"
            }
          ]
        }
      ],
      coverImage: "https://www.sawa-kenkyujo.com/wpcms/wp-content/uploads/kurohon_cover1.png",
      pointImages: [
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point1.jpg",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point2.jpg",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point3.jpg",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point4.jpg",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point5.jpg",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/2024/04/point6.jpg"
      ]
    },

	// 赤本の特徴データ
    red: {
      title: "さわ研の赤本が選ばれる6つの理由",
      mainColor: "#300a0a", // 背景色：赤系
      accentColor: "#e11d48", // アクセント色：赤
      headerGradStart: "#b91c1c", // ヘッダーグラデーション開始色
      headerGradEnd: "#ef4444",   // ヘッダーグラデーション終了色
      badgeBgColor: "#7f1d1d",   // バッジ背景色
      highlightColor: "rgba(239, 68, 68, 0.4)", // ハイライト色
      primaryBtnColor: "#dc2626", // プライマリーボタン色
      primaryBtnHover: "#b91c1c", // プライマリーボタンホバー色
      secondaryBtnColor: "#7f1d1d", // セカンダリーボタン色
      secondaryBtnHover: "#641717", // セカンダリーボタンホバー色
      boxBgColor: "#3f1111", // ボックス背景色
      points: [
        { 
          title: "基礎から応用まで完全対応",
          desc: [
            {
              icon: "1",
              text: "確実な合格に向けた <span class='highlight'>段階的学習プログラム</span>"
            }
          ]
        },
        { 
          title: "厳選された良問を収録",
          desc: [
            {
              icon: "✓",
              text: "効率的に学習できるように厳選された問題を解くことで、必須知識を効果的に習得できます。"
            }
          ]
        },
        { 
          title: "解説が充実した理解しやすい構成",
          desc: [
            {
              icon: "✓",
              text: "初学者でも理解できる丁寧な解説で、基礎から応用まで確実に理解できます。"
            }
          ]
        },
        { 
          title: "確認テスト付きで理解度チェック",
          desc: [
            {
              icon: "✓",
              text: "各章の終わりには確認テストがあり、自分の理解度を確認しながら学習できます。"
            }
          ]
        },
		{ 
			title: "確認テスト付きで理解度チェック",
			desc: [
			  {
				icon: "✓",
				text: "各章の終わりには確認テストがあり、自分の理解度を確認しながら学習できます。"
			  }
			]
		  },
        { 
          title: "赤本利用者向け特別サポート",
          desc: [
            {
              icon: "✓",
              text: "赤本購入者限定の質問対応サービスで、わからない部分をすぐに解決できます。"
            }
          ]
        }
      ],
      coverImage: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
      pointImages: [
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png"
      ]
    },
    
    // 青本の特徴データ
    blue: {
      title: "さわ研の青本が選ばれる5つの理由",
      mainColor: "#0c2b4d", // 背景色：青系
      accentColor: "#0ea5e9", // アクセント色：青
      headerGradStart: "#0c4a6e", // ヘッダーグラデーション開始色
      headerGradEnd: "#0284c7",   // ヘッダーグラデーション終了色
      badgeBgColor: "#075985",   // バッジ背景色
      highlightColor: "rgba(14, 165, 233, 0.4)", // ハイライト色
      primaryBtnColor: "#0ea5e9", // プライマリーボタン色
      primaryBtnHover: "#0284c7", // プライマリーボタンホバー色
      secondaryBtnColor: "#075985", // セカンダリーボタン色
      secondaryBtnHover: "#0c4a6e", // セカンダリーボタンホバー色
      boxBgColor: "#0f2942", // ボックス背景色
      points: [
        { 
          title: "実践力を養う高度な問題集",
          desc: [
            {
              icon: "1",
              text: "実践的な例題と <span class='highlight'>詳細な解説</span>で応用力を強化"
            }
          ]
        },
        { 
          title: "国試によく出る重要テーマに焦点",
          desc: [
            {
              icon: "✓",
              text: "青本は、出題頻度の高いテーマを徹底的に解説し、効率的に実力を養成します。"
            }
          ]
        },
        { 
          title: "苦手分野を克服するための構成",
          desc: [
            {
              icon: "✓",
              text: "難易度別の問題構成により、段階的に苦手分野を克服できる仕組みになっています。"
            }
          ]
        },
        { 
          title: "図解と表でわかりやすく整理",
          desc: [
            {
              icon: "✓",
              text: "複雑な内容も図解と表を用いて視覚的に理解しやすくなっています。"
            }
          ]
        },
        { 
          title: "過去問との関連性を明示",
          desc: [
            {
              icon: "✓",
              text: "各問題と過去問の関連性を示すことで、出題傾向を把握しやすくしています。"
            }
          ]
        }
      ],
      coverImage: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
      pointImages: [
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png"
      ]
    },

	// 白本の特徴データ
    white: {
      title: "さわ研の白本が選ばれる4つの理由",
      mainColor: "#1f2937", // 背景色：グレー系
      accentColor: "#64748b", // アクセント色：グレー
      headerGradStart: "#334155", // ヘッダーグラデーション開始色
      headerGradEnd: "#475569",   // ヘッダーグラデーション終了色
      badgeBgColor: "#1e293b",   // バッジ背景色
      highlightColor: "rgba(100, 116, 139, 0.4)", // ハイライト色
      primaryBtnColor: "#64748b", // プライマリーボタン色
      primaryBtnHover: "#475569", // プライマリーボタンホバー色
      secondaryBtnColor: "#1e293b", // セカンダリーボタン色
      secondaryBtnHover: "#0f172a", // セカンダリーボタンホバー色
      boxBgColor: "#283242", // ボックス背景色
      points: [
        { 
          title: "初心者にもわかりやすい解説",
          desc: [
            {
              icon: "1",
              text: "基礎から理解できる <span class='highlight'>やさしい解説</span>"
            }
          ]
        },
        { 
          title: "イラストが豊富でビジュアル学習",
          desc: [
            {
              icon: "✓",
              text: "複雑な概念も豊富なイラストでわかりやすく解説しています。"
            }
          ]
        },
        { 
          title: "要点がまとまったコンパクト設計",
          desc: [
            {
              icon: "✓",
              text: "重要ポイントを凝縮し、効率的な学習ができるように工夫されています。"
            }
          ]
        },
        { 
          title: "豊富な練習問題で確実に理解",
          desc: [
            {
              icon: "✓",
              text: "段階的な練習問題で、確実に知識を定着させることができます。"
            }
          ]
        }
      ],
      coverImage: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
      pointImages: [
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png"
      ]
    },
    
    // 解剖ノートの特徴データ
    note: {
      title: "さわ研の解剖ノートが選ばれる4つの理由",
      mainColor: "#422006", // 背景色：茶系
      accentColor: "#ca8a04", // アクセント色：黄土色
      headerGradStart: "#854d0e", // ヘッダーグラデーション開始色
      headerGradEnd: "#ca8a04",   // ヘッダーグラデーション終了色
      badgeBgColor: "#713f12",   // バッジ背景色
      highlightColor: "rgba(202, 138, 4, 0.4)", // ハイライト色
      primaryBtnColor: "#ca8a04", // プライマリーボタン色
      primaryBtnHover: "#a16207", // プライマリーボタンホバー色
      secondaryBtnColor: "#713f12", // セカンダリーボタン色
      secondaryBtnHover: "#422006", // セカンダリーボタンホバー色
      boxBgColor: "#4d2d0a", // ボックス背景色
      points: [
        { 
          title: "図解で解剖学が一目でわかる",
          desc: [
            {
              icon: "1",
              text: "複雑な解剖も <span class='highlight'>わかりやすい図解</span>で理解できる"
            }
          ]
        },
        { 
          title: "重要ポイントが整理されている",
          desc: [
            {
              icon: "✓",
              text: "試験によく出る部分が明確に整理されているので、効率的に学習できます。"
            }
          ]
        },
        { 
          title: "関連性がわかる構成",
          desc: [
            {
              icon: "✓",
              text: "各器官の関連性が理解しやすいように構成されており、体系的に学習できます。"
            }
          ]
        },
        { 
          title: "コンパクトで持ち運びやすい",
          desc: [
            {
              icon: "✓",
              text: "コンパクトサイズで実習時にも持ち運びやすく、いつでも復習できます。"
            }
          ]
        }
      ],
      coverImage: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
      pointImages: [
		"https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png"
      ]
    },
    
    // 【電子書籍版】第114回看護国試全問解説集
    explanation: {
      title: "さわ研の全問解説集が選ばれる理由",
      mainColor: "#18181b", // 背景色：ダークグレー
      accentColor: "#71717a", // アクセント色：ミディアムグレー
      headerGradStart: "#3f3f46", // ヘッダーグラデーション開始色
      headerGradEnd: "#52525b",   // ヘッダーグラデーション終了色
      badgeBgColor: "#27272a",   // バッジ背景色
      highlightColor: "rgba(113, 113, 122, 0.4)", // ハイライト色
      primaryBtnColor: "#71717a", // プライマリーボタン色
      primaryBtnHover: "#52525b", // プライマリーボタンホバー色
      secondaryBtnColor: "#27272a", // セカンダリーボタン色
      secondaryBtnHover: "#18181b", // セカンダリーボタンホバー色
      boxBgColor: "#27272a", // ボックス背景色
      points: [
        { 
          title: "全ての問題を徹底解説",
          desc: [
            {
              icon: "1",
              text: "<span class='highlight'>詳細な解説</span>で完全理解"
            }
          ]
        },
        { 
          title: "理解を深める補足説明",
          desc: [
            {
              icon: "✓",
              text: "単なる解答だけでなく、背景知識や関連情報も解説されています。"
            }
          ]
        },
        { 
          title: "出題傾向の分析付き",
          desc: [
            {
              icon: "✓",
              text: "過去の出題傾向を分析し、今後の試験対策にも役立つ情報が満載です。"
            }
          ]
        }
      ],
      coverImage: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
      pointImages: [
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
        "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png"
      ]
    },

	// 看護国試によく出る疾患BEST10【疾患本】
    disease: {
		title: "さわssss研の全問解説集が選ばれる理由",
		mainColor: "#18181b", // 背景色：ダークグレー
		accentColor: "#71717a", // アクセント色：ミディアムグレー
		headerGradStart: "#3f3f46", // ヘッダーグラデーション開始色
		headerGradEnd: "#52525b",   // ヘッダーグラデーション終了色
		badgeBgColor: "#27272a",   // バッジ背景色
		highlightColor: "rgba(113, 113, 122, 0.4)", // ハイライト色
		primaryBtnColor: "#71717a", // プライマリーボタン色
		primaryBtnHover: "#52525b", // プライマリーボタンホバー色
		secondaryBtnColor: "#27272a", // セカンダリーボタン色
		secondaryBtnHover: "#18181b", // セカンダリーボタンホバー色
		boxBgColor: "#27272a", // ボックス背景色
		points: [
		  { 
			title: "全ての問sssss題を徹底解説",
			desc: [
			  {
				icon: "1",
				text: "<span class='highlight'>詳細な解説</span>で完全理解"
			  }
			]
		  },
		  { 
			title: "理解を深める補足説明",
			desc: [
			  {
				icon: "✓",
				text: "単なる解答だけでなく、背景知識や関連情報も解説されています。"
			  }
			]
		  },
		  { 
			title: "出題傾向の分析付き",
			desc: [
			  {
				icon: "✓",
				text: "過去の出題傾向を分析し、今後の試験対策にも役立つ情報が満載です。"
			  }
			]
		  }
		],
		coverImage: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
		pointImages: [
		  "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
		  "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
		  "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png"
		]
	  }
  };

  // DOM要素の取得
  const tabButtons = document.querySelectorAll('.tab-button');
  const mainBookImage = document.getElementById('main-book-image');
  const sampleImagesContainer = document.getElementById('sample-images');
  const bookInfoCard = document.getElementById('book-info-card');
  const bookTitle = document.getElementById('book-title');
  const bookSubtitle = document.getElementById('book-subtitle');
  const bookStudyTime = document.getElementById('book-study-time');
  const bookLevel = document.getElementById('book-level');
  const blackPriceSection = document.getElementById('black-price-section');
  const regularPriceSection = document.getElementById('regular-price-section');
  const bookPrice = document.getElementById('book-price');
  const bookPoints = document.getElementById('book-points');
  const addToCartButton = document.getElementById('add-to-cart-button');
  const sampleButton = document.getElementById('sample-button');
  const relatedBooks = document.getElementById('related-books');

  // モーダル関連の要素
  const imageModal = document.getElementById('image-modal');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalClose = document.querySelector('.modal-close');
  const modalPrev = document.querySelector('.modal-prev');
  const modalNext = document.querySelector('.modal-next');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalCounter = document.getElementById('modal-counter');
  const modalDots = document.getElementById('modal-dots');

  // 現在選択されている本とモーダルの状態を管理する変数
  let activeBook = 'black';
  let currentImages = [];
  let currentImageIndex = 0;

  // デフォルトの画像データを設定
  currentImages = [
    {
      src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x400.png",
      alt: "黒本",
      description: "実習も国試もこの1冊で!"
    },
    {
      src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
      alt: "目次ページサンプル",
      description: "章立てが明確で、探しやすい目次構成"
    },
    {
      src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
      alt: "解説ページサンプル",
      description: "わかりやすい図解入りの丁寧な解説"
    },
    {
      src: "https://stg.sawa-wp.sawakenweb.com/wpcms/wp-content/uploads/300x200.png",
      alt: "問題ページサンプル",
      description: "本番を想定した実践的な問題"
    }
  ];

  // 特徴セクションを更新する関数
  function updateFeaturesSection(bookKey) {
	const bookFeatures = document.getElementById('book-features');
	if (!bookFeatures) return;
	
	const data = featuresData[bookKey];
	if (!data) return;
	
	// CSS変数を設定して色を変更
	bookFeatures.style.setProperty('--main-bg-color', data.mainColor);
	bookFeatures.style.setProperty('--accent-color', data.accentColor);
	bookFeatures.style.setProperty('--header-grad-start', data.accentColor); 
	bookFeatures.style.setProperty('--header-grad-end', data.accentColor);
	bookFeatures.style.setProperty('--badge-bg-color', data.badgeBgColor);
	bookFeatures.style.setProperty('--highlight-color', data.highlightColor);
	bookFeatures.style.setProperty('--primary-btn-color', data.accentColor);
	bookFeatures.style.setProperty('--primary-btn-hover', data.primaryBtnHover);
	bookFeatures.style.setProperty('--secondary-btn-color', data.secondaryBtnColor);
	bookFeatures.style.setProperty('--secondary-btn-hover', data.secondaryBtnHover);
	bookFeatures.style.setProperty('--box-bg-color', data.boxBgColor);
	
	// タイトルを更新
	const titleElement = bookFeatures.querySelector('.features-title');
	if (titleElement) {
	  titleElement.textContent = data.title;
	}
	
	// 表紙画像を更新
	const coverImage = bookFeatures.querySelector('.book-cover');
	if (coverImage) {
	  coverImage.src = data.coverImage;
	  coverImage.alt = `${bookKey}表紙`;
	}
	
	// ナビゲーションリンクを更新
	const pointsList = bookFeatures.querySelector('.points-list');
	if (pointsList) {
	  let linksHTML = '';
	  data.points.forEach((point, index) => {
		linksHTML += `<li><a href="#point${index+1}" class="point-link">${point.title}</a></li>`;
	  });
	  pointsList.innerHTML = linksHTML;
	}
  
	// ポイントセクションを更新
	const pointsContainer = bookFeatures.querySelector('.feature-point').parentNode;
	if (pointsContainer) {
	  // 古いポイントセクションを削除
	  const oldPoints = bookFeatures.querySelectorAll('.feature-point');
	  oldPoints.forEach(point => point.remove());
	  
	  // 新しいポイントセクションを追加
	  data.points.forEach((point, index) => {
		const pointElement = document.createElement('div');
		pointElement.id = `point${index+1}`;
		pointElement.className = 'feature-point';
		
		// 初期状態で最初のポイントだけを開く
		const checked = index === 0 ? ' checked' : '';
		
		let pointHTML = `
		  <input type="checkbox" id="point${index+1}-toggle"${checked}>
		  <label for="point${index+1}-toggle" class="point-header">
			<div class="point-badge">Point ${index+1}</div>
			<h4 class="point-title">${point.title}</h4>
			<div class="collapse-icon"></div>
		  </label>
		  <div class="collapsible-content">
			<div class="point-content-vertical">
			  <div class="point-image">
				<img src="${data.pointImages[index] || data.pointImages[0]}" alt="${point.title}" class="point-img">
			  </div>
			  <div class="point-description">
		`;
		
		// 説明文を追加
		point.desc.forEach(item => {
		  pointHTML += `
			<div class="point-feature">
			  <div class="feature-icon">${item.icon}</div>
			  <p>${item.text}</p>
			</div>
		  `;
		});
		
		pointHTML += `
			  </div>
			</div>
		  </div>
		`;
		
		pointElement.innerHTML = pointHTML;
		pointsContainer.insertBefore(pointElement, bookFeatures.querySelector('.purchase-section'));
	  });
	}
	
	// 表示・非表示を更新
	updateFeaturesSectionVisibility(bookKey);

	function updateFeaturesSectionVisibility(bookKey) {
		const bookFeatures = document.getElementById('book-features');
		if (!bookFeatures) return;
		
		// 白本、全問解説集、疾患本のみ非表示に
		if (bookKey === 'white' || bookKey === 'explanation' || bookKey === 'disease') {
		  bookFeatures.style.display = 'none';
		} else {
		  bookFeatures.style.display = 'block';
		}
	  }
  }

  // タブボタンのクリックイベントを設定
  tabButtons.forEach(button => {
	button.addEventListener('click', function() {
	  const bookKey = this.getAttribute('data-tab');
	  
	  // アクティブなタブを更新
	  tabButtons.forEach(btn => {
		btn.classList.remove('active');
		// 閉じた本のアイコンに変更
		const btnIcon = btn.querySelector('.book-icon');
		btnIcon.innerHTML = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>';
	  });
	  
	  this.classList.add('active');
	  // 開いた本のアイコンに変更
	  const activeIcon = this.querySelector('.book-icon');
	  activeIcon.innerHTML = '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>';
	  
	  // 選択された本のデータを表示
	  updateBookDisplay(bookKey);
	  
	  // アクティブな本を更新
	  activeBook = bookKey;
	  
	  // 関連本を更新
	  updateRelatedBooks();
	  
	  // 特徴セクションを更新
	  updateFeaturesSection(bookKey);
	});
  });

  // モーダルの「次へ」ボタンに直接イベントを追加（インラインで）
  modalNext.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentImages.length > 0) {
      currentImageIndex = (currentImageIndex + 1) % currentImages.length;
      showImage(currentImageIndex);
    }
    console.log('次の画像ボタンがクリックされました', currentImageIndex);
    return false;
  };

  // モーダルの「前へ」ボタンに直接イベントを追加（インラインで）
  modalPrev.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (currentImages.length > 0) {
      currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
      showImage(currentImageIndex);
    }
    console.log('前の画像ボタンがクリックされました', currentImageIndex);
    return false;
  };

  // モーダルの「閉じる」ボタンに直接イベントを追加
  modalClose.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
    console.log('モーダル閉じるボタンがクリックされました');
    return false;
  };

  // モーダルのオーバーレイに直接イベントを追加
  modalOverlay.onclick = function(e) {
    e.preventDefault();
    closeModal();
    console.log('モーダルオーバーレイがクリックされました');
    return false;
  };

  // 画像表示関数
  function showImage(index) {
    if (index >= 0 && index < currentImages.length) {
      const image = currentImages[index];
      
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modalTitle.textContent = image.alt;
      modalDescription.textContent = image.description;
      modalCounter.textContent = `${index + 1} / ${currentImages.length}`;
      
      // ドットのアクティブ状態を更新
      const dots = modalDots.querySelectorAll('.modal-dot');
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  // 初期表示の設定
  function initializeDisplay() {
	// 初期化時にアクティブでないタブのアイコンを閉じた本に変更
	tabButtons.forEach(btn => {
	  if (!btn.classList.contains('active')) {
		const btnIcon = btn.querySelector('.book-icon');
		btnIcon.innerHTML = '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>';
	  }
	});
	
	// 初期表示時にメイン画像のsrc属性を設定
	if (mainBookImage) {
	  const initialBook = booksData['black'];
	  if (initialBook) {
		mainBookImage.src = initialBook.image;
		mainBookImage.alt = initialBook.title;
	  }
	}
	
	updateBookDisplay('black');
	updateRelatedBooks();
	setupModalEvents();
	updateFeaturesSection('black');
	
	// 特定の教材では特徴セクションを非表示にする初期チェック
	updateFeaturesSectionVisibility('black');
  }

  // 本の情報を表示する関数
  function updateBookDisplay(bookKey) {
	const book = booksData[bookKey];
    
    // メイン画像要素を毎回取得
  const mainBookImage = document.getElementById('main-book-image');
  
  // メイン画像を更新
  if (mainBookImage) {
    mainBookImage.src = book.image;
    mainBookImage.alt = book.title;
    console.log("メイン画像を更新:", book.image);
  } else {
    console.error("メイン画像要素が見つかりません");
  }
    
    // サンプル画像を更新
    sampleImagesContainer.innerHTML = '';
    if (book.detailImages) {
      book.detailImages.forEach((image, index) => {
        const button = document.createElement('button');
        button.className = 'sample-image-button';
        button.setAttribute('data-index', index);
        button.setAttribute('data-src', image.src);
        button.setAttribute('data-alt', image.alt);
        button.setAttribute('data-desc', image.description);
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = 'sample-image';
        
        button.appendChild(img);
        sampleImagesContainer.appendChild(button);
        
        // サンプル画像のクリックイベント
        button.addEventListener('click', function() {
          openModal(book, parseInt(this.getAttribute('data-index')) + 1);
        });
      });
    }
    
    // メイン画像のクリックイベントを再設定
    const mainImageButton = document.querySelector('.main-image-button');
    // 既存のイベントリスナーを削除するため、新しい要素に置き換える
    const newMainImageButton = mainImageButton.cloneNode(true);
    mainImageButton.parentNode.replaceChild(newMainImageButton, mainImageButton);
    
    // 新しいメイン画像ボタンにイベントを設定
    newMainImageButton.addEventListener('click', function() {
      openModal(book, 0);
    });

    // 商品情報カードのスタイルを更新
    if (bookKey === 'black') {
      bookInfoCard.classList.add('black-theme');
      bookInfoCard.classList.remove('standard-theme');
      blackPriceSection.classList.remove('hidden');
      regularPriceSection.classList.add('hidden');
      addToCartButton.className = 'cart-button';
      sampleButton.className = 'sample-button';
    } else {
      bookInfoCard.classList.remove('black-theme');
      bookInfoCard.classList.add('standard-theme');
      blackPriceSection.classList.add('hidden');
      regularPriceSection.classList.remove('hidden');
      addToCartButton.className = 'cart-button standard-theme';
      sampleButton.className = 'sample-button standard-theme';
    }
    
    // 商品情報を更新
    bookTitle.textContent = book.title;
    bookSubtitle.textContent = book.subtitle;
    bookStudyTime.innerHTML = book.studyTime; // HTMLタグを適用するためにinnerHTMLを使用
    bookLevel.innerHTML = book.level;
    bookPrice.textContent = book.price;
    
    // 特徴ポイントを更新
    bookPoints.innerHTML = '';
    book.points.forEach(point => {
      const pointItem = document.createElement('div');
      pointItem.className = 'point-item';
      
      const checkIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      checkIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      checkIcon.setAttribute('width', '24');
      checkIcon.setAttribute('height', '24');
      checkIcon.setAttribute('viewBox', '0 0 24 24');
      checkIcon.setAttribute('fill', 'none');
      checkIcon.setAttribute('stroke', 'currentColor');
      checkIcon.setAttribute('stroke-width', '2');
      checkIcon.setAttribute('stroke-linecap', 'round');
      checkIcon.setAttribute('stroke-linejoin', 'round');
      checkIcon.setAttribute('class', 'check-icon'); // SVG要素にはsetAttributeを使用
      
      const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path1.setAttribute('d', 'M22 11.08V12a10 10 0 1 1-5.93-9.14');
      
      const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      path2.setAttribute('points', '22 4 12 14.01 9 11.01');
      
      checkIcon.appendChild(path1);
      checkIcon.appendChild(path2);
      
      const pointText = document.createElement('span');
      pointText.className = 'point-text';
      pointText.textContent = point;
      
      pointItem.appendChild(checkIcon);
      pointItem.appendChild(pointText);
      bookPoints.appendChild(pointItem);
    });
    
    // 現在の画像リストを更新
    currentImages = [
      {
        src: book.image,
        alt: book.title,
        description: book.subtitle
      },
      ...book.detailImages
    ];
  }

  // 関連本を更新する関数（関連教材ラインナップ）
  function updateRelatedBooks() {
    if (!relatedBooks) return;
    
    relatedBooks.innerHTML = '';
    
    // アクティブな本以外を表示
    let displayedCount = 0;
    Object.keys(booksData).forEach(key => {
      if (key !== activeBook) {
        const book = booksData[key];
        
        const bookButton = document.createElement('button');
        bookButton.className = 'related-book';
        bookButton.setAttribute('data-tab', key);
        
        const bookImg = document.createElement('div');
        bookImg.className = 'related-book-img';
        
        const bookImage = document.createElement('img');
        bookImage.src = book.image;
        bookImage.alt = book.title;
        bookImage.className = 'related-book-image';
        
        bookImg.appendChild(bookImage);
        
        const bookInfo = document.createElement('div');
        bookInfo.className = 'related-book-info';
        
        const bookTitle = document.createElement('h3');
        bookTitle.className = 'related-book-title';
        bookTitle.textContent = book.title;
        
        const bookSubtitle = document.createElement('p');
        bookSubtitle.className = 'related-book-subtitle';
        bookSubtitle.textContent = book.subtitle;
        
		//関連教材ラインナップ - 金額
        const bookPrice = document.createElement('p');
        bookPrice.className = 'related-book-price';
        // bookPrice.textContent = book.price;
        
        bookInfo.appendChild(bookTitle);
        bookInfo.appendChild(bookSubtitle);
        bookInfo.appendChild(bookPrice);
        
        bookButton.appendChild(bookImg);
        bookButton.appendChild(bookInfo);
        
        relatedBooks.appendChild(bookButton);
        displayedCount++;
        
        // 関連本のクリックイベント
        bookButton.addEventListener('click', function() {
          const bookKey = this.getAttribute('data-tab');
          
          // タブを更新
          tabButtons.forEach(btn => {
            if (btn.getAttribute('data-tab') === bookKey) {
              btn.click();
            }
          });
          
          // ページトップにスクロール
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    });
  }

  // モーダルを開く関数
  function openModal(book, imageIndex) {
    // 画像データを設定
    currentImages = [
      {
        src: book.image,
        alt: book.title,
        description: book.subtitle
      },
      ...book.detailImages
    ];
    
    // 現在の画像インデックスを設定
    currentImageIndex = imageIndex;
    
    // モーダルの内容を更新
    showImage(currentImageIndex);
    
    // モーダルを表示
    imageModal.classList.add('active');
    // document.body.style.overflow = 'hidden'; // スクロール防止
  }

  // モーダルのイベント設定
  function setupModalEvents() {
    // 既存のドットボタンにイベントリスナーを追加
    const existingDots = modalDots.querySelectorAll('.modal-dot');
    existingDots.forEach(dot => {
      dot.onclick = function(e) {
        e.stopPropagation();
        currentImageIndex = parseInt(this.getAttribute('data-index'));
        showImage(currentImageIndex);
        console.log('ドットボタンがクリックされました:', currentImageIndex);
        return false;
      };
    });
    
    // キーボードイベント
    document.addEventListener('keydown', function(e) {
      if (!imageModal.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        showImage(currentImageIndex);
      } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        showImage(currentImageIndex);
      }
    });
  }

  // モーダルを閉じる関数
  function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = ''; // スクロール復活
    console.log('モーダルが閉じられました');
  }

  // 初期表示を設定
  initializeDisplay();
  
  // 念のため既存のドットにもイベントを設定
  const dots = modalDots.querySelectorAll('.modal-dot');
  dots.forEach((dot) => {
    const index = parseInt(dot.getAttribute('data-index'));
    dot.onclick = function(e) {
      e.preventDefault();
      e.stopPropagation();
      currentImageIndex = index;
      showImage(currentImageIndex);
      return false;
    };
  });
});

// setupCounter関数が定義されていないエラーを回避するためのダミー実装
function setupCounter(element) {
  // 空の実装
  if (element) {
    console.log("Counter setup placeholder");
  }
}


 setupCounter(document.querySelector("#counter"));