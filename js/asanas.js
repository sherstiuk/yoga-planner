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
    
    var card = $('#item').html();
    $('#item').hide();
    var content = $('#content');
    
    function add(name, cat, time, dur, comp, sym, ic){        
        var temp = $(card);
        var n = temp.find(".name");
        n.text(name);
        var t = temp.find(".time");
        t.text(time);
        temp.find("img").attr("src", ic);
        temp.find(".ic").text(ic);
        temp.find(".dur").text(dur);
        temp.find(".comp").text(comp);
        temp.find(".sym").text(sym);
        temp.find(".cat").text(cat);
        switch(cat) {
            case 1: temp.addClass('uno');
                break;
            case 2:
                temp.addClass('dos');
                temp.find('.sub').css('background-color', 'darkorange');
                break;
            case 3:
                temp.addClass('tres');
                temp.find('.sub').css('background-color', 'forestgreen');//aquamarine//darkcyan
                break;
        }
        
        content.append(temp);
    }  
    
    for (i = 0; i < 12; i++) {
        add(asanas[i].name_sa, asanas[i].category, asanas[i].time, asanas[i].dur, asanas[i].complexity, asanas[i].symmetry, asanas[i].ic)
    }
   
});


 /*   var asana = {
        name_sa: 'Asana',
        name_en: 'Pose',
        category: 1,
        complexity: 1,
        time: '1 min',
        symmetry: 1
    }*/