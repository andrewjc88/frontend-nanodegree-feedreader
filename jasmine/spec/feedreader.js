// Test for app.js
$(function() {
 
    describe('RSS Feeds', function() {
 
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have urls', function() {

            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('have names', function() {

            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
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

        var feed0,
            feed1,
            i = 0; // instanciates the feed#

        beforeEach(function(done) {          

            loadFeed(i, function(){
                i++;
                done();
            });

        });

        it('has run and has feeds', function(done) {

            feed0 = $('.feed.article.entry');       
            
            expect(feed0).toBeDefined();

            done();
        });

        it('has changed with new feed', function(done) {

            feed1 = $('.feed.article.entry');       
            
            expect(feed0).not.toBe(feed1);
            done();
        });
    });
}());
