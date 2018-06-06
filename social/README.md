# pubsocial

Current demo includes a variety of different placements using Twitter and Instagram. Here are some useful notes when working with twitter and Instagram embeds for PubSocial 

### Twitter 

⋅⋅⋅Twitter has the option to render embed script with or without the photo card using `data-cards = hidden` 
⋅⋅⋅A Twitter embed is guaranteed to fit in a 300x250 slot with the maximum number of characters in a tweet and without photo. This is great if the inventory is a 300x250 slot and cannot be busted or resized. 
⋅⋅⋅It's good to dynamically render the twitter.js embed script in the `onRender` callback. Here is an example: 

```
 // Inject Twitter Embed Script
  	window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
    return t;
  	}(window.parent.document, "script", "twitter-wjs"));
```

⋅⋅⋅ In the case where the script is loaded before the twitter blockquote, we would need to rerender the twitter widgets. 
```    
twttr.ready(function (twttr) {
        twttr.events.bind('loaded', function (event) { 
          console.log('Twitter Loaded'); 
          resizeIframe(renderContext);
        });
    });  
    
    ```
⋅⋅⋅ In the case where we want to resize the iframe instead of bust out, we cannot use the creative.js 'Render outside of the iframe' option in the Template Render Options. This is becuase this function gets called before the twitter embed scripts get injected and would  not have a height to resize to.

```// Resizing Iframe function
function resizeIframe(renderContext) {
        var adjustWidth = true;
        var adjustHeight = true;
        var $ = parent.$;
 
        if(adjustWidth) {    
            //Adjust iframe to rendered width of 100% 
            var iframe = window.frameElement;
            var $node = $(iframe);
          
            while ($node[0].tagName == "IFRAME") {
                    $node.width('100%');
                    $node = $node.parent();
                }            
        }

        if (adjustHeight) {
					  //Adjust iframe to rendered height of injected Template
            var iframe = window.frameElement;
            var $node = $(iframe);
            var height = renderContext.$template.find('twitterwidget').outerHeight(true);
                       
            while ($node[0].tagName == "IFRAME") {
                    $node.height(height);
                    $node = $node.parent();
                }           
        }
    
   }
   ```
⋅⋅⋅ set `data-width=100%` to get that full width layout :)

### Instagram

⋅⋅⋅ Instagram does not allow you to render their embed scripts inside iframe

⋅⋅⋅ In the layouts, I don't render instagram dynamically  (I include it in the html) and it seems to work like that. But you can render dynamically (and probably should) in the `onRender` callback.

⋅⋅⋅ Instagram allows you to choose if you want captions or not with the attribute `data-instgrm-captioned`

### DFP  & Managed Mode
All placements are using managed mode on our Demo Sales DFP Account. 

(From adcalls.md)

Here is a list of all the ad calls for Pub Social

#### We have two Ad Units 
 1. /13832985/pub-social - These are for twitter creatives
 2. /13832985/pub-social-insta - These are for instagram creatives

#### Placement Key Conditions:

twtr_photo_rr_bust: Twitter with Photo, Busts out of iframe in Desktop Right Rail

twtr_photo_stream_mobile: Twitter with Photo, Busts out of iframe in Mobile Article

twtr_rr_bust: Twitter without Photo, Busts out of iframe in Desktop Right Rail

twtr_stream_mobile: Twitter without Photo, Busts out of iframe in Mobile Article 

twtr_rr: Twitter without Photo, Inside Iframe

twtr_iframe_resize: Twitter with photo, inside iframe but resized

twtr_photo_follow: Twitter with photo and follow button, Busts out of iframe

twtr_follow: Twitter without photo and follow button, Busts ouf of iframe

insta_post: Instagram with caption, iframe bust

insta_post_resize: Instagram with caption, iframe resizing (DOESN'T WORK- try it out?)

insta_post_mobile: Instagram without caption, iframe bust (mobile)

	Twitter:
        googletag.defineSlot('/13832985/pub-social', [
            [300, 250],
            [3, 3]
        ], 'div-gpt-ad-1492093128486-0').addService(googletag.pubads()).setTargeting("MVPropertyID", "NA-PUBSOCI-11238816").setTargeting("MVPlacementKey", "twtr_photo_rr_bust");
	
	
#### Instagram inventory Sizes and the specific creative/promofeed trafficked
 [2,2] Promo Feed
 [3, 3] Post Only
 [4, 4] Video Only
 [5, 5] Carousel Only
		
        googletag.defineSlot('/13832985/pub-social-insta', [
        	[2, 2],
        	[3, 3],
        	[4, 4],
        	[5, 5]
        ], 'div-gpt-ad-1492622932360-0').addService(googletag.pubads()).setTargeting("MVPropertyID", "NA-PUBSOCI-11238816").setTargeting("MVPlacementKey", "insta_post")
