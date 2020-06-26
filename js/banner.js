
//			function nav3(){
//				$("#nav3").show(3000);//3秒显示
//				//$("#nav3").toggle();动态隐藏和显示
//			}
//			$(document).ready(function(){
//				$("#nav3").hide();
//		    $(".one").mouseover(function(){
//		        $("#nav3").show(1000); 
//		    });
//		    $(".one").mouseout(function(){
//		    	$("#nav3").hide(1000);
//		    });
//		});
		$(document).ready(function(){
				$(".nav > ul > li").mouseenter(function(){
					$(this).children("ul").stop(true,true).slideDown();
				});
				$(".nav ul li").mouseleave(function(){
					$(this).children("ul").stop(true,true).slideUp();
				})
//				显示或隐藏二级菜单
//				$(".nav ul li").hover(function(){
//					$(this).children("ul").slideToggle();
//				});
				//点击事件点击到小按钮
				var index=0;
				$(".tab-btn .btn").click(function(){
					index=$(this).index();//获取点击该元素的下标
					//设置点击一个按钮，清除其他按钮的active类的样式
					$(this).addClass("active").siblings().removeClass("active");
					//eq()方法：找到指定的
					//只展示一张图片，其他图片淡出
					$(".item").eq(index).fadeIn().siblings().fadeOut();
				});
				
				//点击左右切换的按钮
				$(".lr-tab .left").click(function(){
					index--;
					if(index<0){
						index=4;
					}
					$(".item").eq(index).fadeIn().siblings().fadeOut();
					$(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
				});
				//右边
				$(".lr-tab .right").click(function(){
					index++;//下标越来越大
					if(index>4){
						index=0;
					}
					$(".item").eq(index).fadeIn().siblings().fadeOut();
					$(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
				});
				
				//定时器  重复
				var time=setInterval(function(){
					index++;//下标越来越大
					if(index>4){
						index=0;
					}
					$(".item").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();//每次动画前停止之前的动画
					$(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
				},4000);
				
				//通知公告
				
				
		});	
		