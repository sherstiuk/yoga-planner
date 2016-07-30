$(function(){
    var asanas = [
        {
            ic: 'images/01.jpg',
            name_sa: 'Adho Mukha Svanasana',
            name_en: 'Downward-Facing Dog',
            category: 2,
            complexity: 2,
            time: '~1 min',
            dur: 60,
            symmetry: 0
        },
        {
            ic: 'images/02.jpg',
            name_sa: 'Ardha Matsyendrasana',
            name_en: 'Half Spinal Twist',
            category: 1,
            complexity: 1,
            time: '30-60 s',
            dur: 45,
            symmetry: 1
        },
        {
            ic: 'images/03.jpg',
            name_sa: 'Baddha Konasana',
            name_en: 'Cobbler Pose',
            category: 2,
            complexity: 2,
            time: '30-60 s',
            dur: 45,
            symmetry: 0
        },
        {
            ic: 'images/04.jpg',
            name_sa: 'Bhujangasana',
            name_en: 'Cobra Pose',
            category: 1,
            complexity: 1,
            time: '~20 s',
            dur: 20,
            symmetry: 0
        },
        {
            ic: 'images/05.jpg',
            name_sa: 'Paschimottanasana',
            name_en: 'Seated Forward Bend',
            category: 1,
            complexity: 1,
            time: '1-5 min',
            dur: 150,
            symmetry: 0
        },
        {
            ic: 'images/06.jpg',
            name_sa: 'Hanumanasana',
            name_en: 'Monkey Pose',
            category: 2,
            complexity: 2,
            time: '10-30 s',
            dur: 20,
            symmetry: 1
        },
        {
            ic: 'images/07.jpg',
            name_sa: 'Padmasana',
            name_en: 'Lotus Pose',
            category: 2,
            complexity: 2,
            time: '1-5 min',
            dur: 180,
            symmetry: 1
        },
        {
            ic: 'images/08.jpg',
            name_sa: 'Parighasana',
            name_en: 'Gate Pose',
            category: 1,
            complexity: 1,
            time: '30-60 s',
            dur: 45,
            symmetry: 0
        },
        {
            ic: 'images/09.jpg',
            name_sa: 'Prasarita Hastasana',
            name_en: 'Prasarita Hastasana',
            category: 3,
            complexity: 2,
            time: '~30 s',
            dur: 30,
            symmetry: 1
        },
        {
            ic: 'images/10.jpg',
            name_sa: 'Rack Asana',
            name_en: 'Rack Asana',
            category: 3,
            complexity: 3,
            time: '~30 s',
            dur: 30,
            symmetry: 1
        },
        {
            ic: 'images/11.jpg',
            name_sa: 'Samakonasana',
            name_en: 'Splits',
            category: 2,
            complexity: 2,
            time: '~20 s',
            dur: 20,
            symmetry: 0
        },
        {
            ic: 'images/12.jpg',
            name_sa: 'Virasana',
            name_en: 'Hero Pose',
            category: 2,
            complexity: 2,
            time: '1-3 min',
            dur: 120,
            symmetry: 0
        },
    ]
    var unclicked = 1;
    var arrow_watcher = 0;
    var panel = $('#result');
    $('#res').hide();
    
    var plate = $('.panel');
    plate.hide();
    
    
    function toPanel(name, cat, dur, ic){
        var temp = $('#res');
        
        var min = ~~(dur/60);
        var sec = (dur - (min*60));
        //console.log(name, min, 'min', sec, 's');
        
        temp.find(".ic2").attr("src", ic);
        
        var str1 = '<input onblur="total()" id="m2" type="number" name="min" min="0" max="59" value="'
        var str2 = '"> min <input onblur="total()" id="s2" type="number" name="s" min="1" max="59" value="'
        var str3 ='"> s';
        var str_time = str1+min+str2+sec+str3;
        
        temp.find('.settime').html(str_time);
        temp.find('.name2').text(name);
        
        switch(cat) {
            case 1:
                temp.find('.card2').css('background-color', 'rgb(72, 61, 139)');
                //temp.addClass('uno');
                break;
            case 2:
                temp.find('.card2').css('background-color', 'darkorange');
                //temp.addClass('dos');
                break;
            case 3:
                temp.find('.card2').css('background-color', 'forestgreen');//aquamarine//darkcyan
                //temp.addClass('tres');
                break;
        }
        
        var t = $(temp.html());
        var remove = t.find(".remove");
        remove.click(function(){
            if (t.hasClass('vis'))
                t.removeClass('vis');            
            t.fadeOut();
            arrow_watcher--;
            //console.log('AW',arrow_watcher);
            if (arrow_watcher == 0) {
                $('#np').fadeIn(2000);
            }
            total();
        });
        
        t.addClass('vis');
        
        panel.append(t); 
    }
    //toPanel('Aaa', 3, 300, 'images/testex.jpg');
    
    $('.add').click(function(){
        $('#np').hide();
        if (unclicked == 1) {
            plate.slideDown();
            $('#np').hide();
            unclicked = 0;
        }
        var p = $(this).parent();
        var c;
        //console.log('works', p.find('.name').text());
        //console.log(p.css('background-color'));
        if (p.css('background-color') == 'darkorange') c = 2;
        else if (p.css('background-color') == 'forestgreen') c = 3;
        else c = 1;
        //console.log(c);
        toPanel(p.find('.name').text(), c, p.find('.dur').text(), p.find('.ic').text());
        arrow_watcher++;
        //console.log('AW',arrow_watcher);
        total();
    });
    
});