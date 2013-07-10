/*
Originaly developped by Grafikart.fr
*/

$('document').ready(function(){
	$('body').append('<style>.rounded-checkbox input{display:none}.rounded-checkbox .check{cursor:pointer;background-color:#fff;border:3px solid #bdc3c7;width:9px;height:9px;display:inline-block;vertical-align:middle;position:relative;-webkit-border-radius:8px;-moz-border-radius:8px;-ms-border-radius:8px;-o-border-radius:8px;border-radius:8px}.rounded-checkbox input:checked+span{border-color:#2ecc71;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-ms-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}.rounded-checkbox input:checked+span:after{content:"";display:block;width:5px;height:5px;background-color:#2ecc71;position:absolute;top:2px;left:2px;-webkit-border-radius:2px;-moz-border-radius:2px;-ms-border-radius:2px;-o-border-radius:2px;border-radius:2px}.switch{cursor:pointer;display:inline-block;vertical-align:middle;width:79px;height:28px;overflow:hidden;-webkit-border-radius:28px;-moz-border-radius:28px;-ms-border-radius:28px;-o-border-radius:28px;border-radius:28px;-webkit-mask:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAAAcCAAAAAAFRb0DAAAAyklEQVRIx62WvQ2DMBhEr3JFOiQGwBsQN5BsBUwDa1hJFTyFqZgE+0tBEKFMfK9x9+TfO0M+RNc3hcLvqKLpXNw12IYwaqSgx/DtWwxSMcvhe+VIJ3e776nAQD0233wBh2wWgawGLMwqkBE8BkHURJ+OmMBkQk/19bhRfXcUVF8BRfUpuo+9XvZ5dOT7wr7P3PcWIAM3D2S90nTVKhDxGStP/Zb3lpT3du8jy5hhZo++9FX63vlzn5dJtvLc5yISXFv/+d+oWxd2zRuKUqiKGXpVaQAAAABJRU5ErkJggg==") left top}.switch .switch-container{display:inline-block;width:130px;height:28px;margin-left:-51px;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-ms-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}.switch .on,.switch .off{display:inline-block;float:left;background-color:#27ae60;width:50%;height:20px;padding:4px 0;text-align:center;color:#FFF;font-size:15px;position:relative;z-index:1}.switch .on{-moz-border-radius-topleft:28px;-webkit-border-top-left-radius:28px;border-top-left-radius:28px;-moz-border-radius-bottomleft:28px;-webkit-border-bottom-left-radius:28px;border-bottom-left-radius:28px}.switch .off{background-color:#e74c3c;-moz-border-radius-topright:28px;-webkit-border-top-right-radius:28px;border-top-right-radius:28px;-moz-border-radius-bottomright:28px;-webkit-border-bottom-right-radius:28px;border-bottom-right-radius:28px}.switch .mid{display:inline-block;float:left;width:20px;height:20px;-webkit-border-radius:28px;-moz-border-radius:28px;-ms-border-radius:28px;-o-border-radius:28px;border-radius:28px;background-color:#fff;margin-left:-14px;margin-right:-14px;position:relative;z-index:2;border:4px solid #e74c3c;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-ms-transition-duration:.3s;-o-transition-duration:.3s;transition-duration:.3s}.switch input:checked+.switch-container{margin:0}.switch input:checked+.switch-container .mid{border-color:#27ae60}</style>');
	
	$('.tc-switch').each(function(){
	    var input = $(this);
	    input.hide().wrap('<label for="'+input.attr('id')+'" class="checkbox switch-checkbox"><span class="switch">');
	    input.after('<span class="switch-container"><span class="on">OUI</span><span class="mid"></span><span class="off">NON</span></span>');
	});
	
	$('.tc-rounded').each(function(){
	    var input = $(this);
	    input.hide().wrap('<label for="'+input.attr('id')+'" class="checkbox rounded-checkbox">');
	    input.after('<span class="check"><span></span></span>');
	});
});        