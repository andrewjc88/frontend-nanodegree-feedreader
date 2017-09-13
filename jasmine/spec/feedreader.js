// Test for app.js
$(function() {
 
    describe('RSS Feeds', function() {
 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have urls', function() {

            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        it('have names', function() {

            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });        
    });

    describe('The menu', function() {

        it('is initially hidden', function() {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);

        });

        it('is shown and hidden when menu icon is clicked', function(){

            $('.menu-icon-link').trigger('click');
            expect($(document.body).hasClass("menu-hidden")).toBe(false);
            
            $('.menu-icon-link').trigger('click');
            expect($(document.body).hasClass("menu-hidden")).toBe(true);
            
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            
            loadFeed(0, function(){
                done();
            });
        });

        it('has run and has feeds', function(done) {

            var feed0 = $('.feed').html();        
            // console.log(feed0);
            
            expect(feed0).toBeDefined();
            expect(feed0.lenth).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        beforeEach(function(done) {          
                
            loadFeed(0, function(){
                feed_0 = $('.feed').html();
                loadFeed(1, done);
            });
        });

        it('has changed with new feed', function(done) {

            var feed_1 = $('.feed').html();
            
            expect(feed_0.lenth).not.toBe(0);
            expect(feed_1.lenth).not.toBe(0);
            
            expect(feed_0).not.toBe(feed_1);
            done();
        });
    });
}());
