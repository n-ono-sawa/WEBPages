<div class="contents-box c-mv">
	<div class="contents-inner">
		<div class="slider">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<?php if(get_field('main01',9676)){ ?>
					<div class="swiper-slide">
						<?php if(get_field('main01_link',9676)){ ?>
						<a href="<?php echo get_field ('main01_link', 9676);?>">
							<?php } ?><img class="pc" src="<?php echo get_field ('main01', 9676);?>" alt=""><img class="sp" src="<?php echo get_field ('main01sp', 9676);?>" alt="">
							<?php if(get_field('main01_link',9676)){ ?>
						</a>
						<?php } ?>
					</div>
					<?php } ?>

					<?php if(get_field('main02',9676)){ ?>
					<div class="swiper-slide">
						<?php if(get_field('main02_link',9676)){ ?>
						<a href="<?php echo get_field('main02_link', 9676);?>">
							<?php } ?><img class="pc" src="<?php echo get_field ('main02', 9676);?>" alt=""><img class="sp" src="<?php echo get_field ('main02sp', 9676);?>" alt="">
							<?php if(get_field('main02_link',9676)){ ?>
						</a>
						<?php } ?>
					</div>
					<?php } ?>

					<?php if(get_field('main03',9676)){ ?>
					<div class="swiper-slide">
						<?php if(get_field('main03_link',9676)){ ?>
						<a href="<?php echo get_field ('main03_link', 9676);?>">
							<?php } ?><img class="pc" src="<?php echo get_field ('main03', 9676);?>" alt=""><img class="sp" src="<?php echo get_field ('main03sp', 9676);?>" alt="">
							<?php if(get_field('main03_link',9676)){ ?>
						</a>
						<?php } ?>
					</div>
					<?php } ?>

					<?php if(get_field('main04',9676)){ ?>
					<div class="swiper-slide">
						<?php if(get_field('main04_link',9676)){ ?>
						<a href="<?php echo get_field ('main04_link', 9676);?>">
							<?php } ?><img class="pc" src="<?php echo get_field ('main04', 9676);?>" alt=""><img class="sp" src="<?php echo get_field ('main04sp', 9676);?>" alt="">
							<?php if(get_field('main04_link',9676)){ ?>
						</a>
						<?php } ?>
					</div>
					<?php } ?>

					<?php if(get_field('main05',9676)){ ?>
					<div class="swiper-slide">
						<?php if(get_field('main05_link',9676)){ ?>
						<a href="<?php echo get_field ('main05_link', 9676);?>">
							<?php } ?><img class="pc" src="<?php echo get_field ('main05', 9676);?>" alt=""><img class="sp" src="<?php echo get_field ('main05sp', 9676);?>" alt="">
							<?php if(get_field('main05_link',9676)){ ?>
						</a>
						<?php } ?>
					</div>
					<?php } ?>
				</div>
			</div>
		</div>
		<div class="slider-thumb">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<?php if(get_field('main01',9676)){ ?>
					<div class="swiper-slide"><img src="<?php echo get_field ('main01', 9676);?>" alt=""></div>
					<?php } ?>
					<?php if(get_field('main02',9676)){ ?>
					<div class="swiper-slide"><img src="<?php echo get_field ('main02', 9676);?>" alt=""></div>
					<?php } ?>
					<?php if(get_field('main03',9676)){ ?>
					<div class="swiper-slide"><img src="<?php echo get_field ('main03', 9676);?>" alt=""></div>
					<?php } ?>
					<?php if(get_field('main04',9676)){ ?>
					<div class="swiper-slide"><img src="<?php echo get_field ('main04', 9676);?>" alt=""></div>
					<?php } ?>
					<?php if(get_field('main05',9676)){ ?>
					<div class="swiper-slide"><img src="<?php echo get_field ('main05', 9676);?>" alt=""></div>
					<?php } ?>
				</div>
			</div>
		</div>
	</div>
</div>
<style>
	.add_float_wrap {
		width: 94%;
		max-width: 980px;
		margin: 0 auto 30px;
	}
	
	.add_float {
		position: relative;
		width: 100%;
		padding-top: 56.25%;
	}
	
	.frame_add {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}

@media screen and (max-width: 768px) {
	.add_float_wrap {
		margin: 0 auto 20px;
	}
}
</style>
<!-- <div class="add_float_wrap">
	<div class="add_float">
		<iframe class="frame_add" src="https://www.youtube.com/embed/q1grS7kkIpg" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="動画講義見放題プラン"></iframe>
	</div>
</div> -->
<!-- /.contents-box c-box01 -->
