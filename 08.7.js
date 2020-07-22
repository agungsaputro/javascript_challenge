function slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-') 
      .replace(/-+/g, '-')
  
    return str
  }

  function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    str = str.replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '_') 
      .replace(/-+/g, '_')
  
    return str
  }

  console.log(slug("JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?"))
  console.log(slugify("JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?"))
