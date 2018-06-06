Here is a list of all the ad calls for Pub Social
We have two Ad Units 
 1. /13832985/pub-social - These are for twitter creatives
 2. /13832985/pub-social-insta - These are for instagram creatives

Placement Key Conditions:

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
	
	
Instagram
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
