import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subName',
})
export class SubNamePipe implements PipeTransform {
  transform(value: any): any {
    let subName = '';
    switch (value) {
      case 'ADAV':
        subName = 'Lập trình Android nâng cao';
        break;
      case 'ADBS':
        subName = 'Lập trình Android cơ bản';
        break;
      case 'ADTE':
        subName = 'Kiểm thử và triển khai ứng dụng Android';
        break;
      case 'ADUI':
        subName = 'Thiết kế giao diện trên Android';
        break;
      case 'ASNE':
        subName = 'Lập trình ASP.NET';
        break;
      case 'CLCO':
        subName = 'Điện toán đám mây';
        break;
      case 'DBAV':
        subName = 'SQL Server';
        break;
      case 'DBBS':
        subName = 'Cơ sở dữ liệu';
        break;
      case 'GAME':
        subName = 'Lập trình game 2D';
        break;
      case 'HTCS':
        subName = 'HTML5 và CSS3';
        break;
      case 'INMA':
        subName = 'Internet Marketing';
        break;
      case 'JAAV':
        subName = 'Lập trình Java nâng cao';
        break;
      case 'JABS':
        subName = 'Lập trình hướng đối tượng với Java';
        break;
      case 'JSPR':
        subName = 'Lập trình JavaScript';
        break;
      case 'LAYO':
        subName = 'Thiết kế layout';
        break;
      case 'MOWE':
        subName = 'Thiết kế web cho điện thoại di động';
        break;
      case 'PHPP':
        subName = 'Lập trình PHP';
        break;
      case 'PMAG':
        subName = 'Quản lý dự án với Agile';
        break;
      case 'VBPR':
        subName = 'Lập trình VB.NET';
        break;
      case 'WEBU':
        subName = 'Xây dựng trang web';
        break;
      case 'WEB207':
        subName = 'Lập trình Frontend framework - angularjs';
        break;
    }
    return subName;
  }
}
