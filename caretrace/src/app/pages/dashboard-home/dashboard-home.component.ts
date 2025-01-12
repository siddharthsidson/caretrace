import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
})
export class DashboardHomeComponent {
  helperMaterials: any;
  tableHeaders: any;
  materialsArray: any;
  //videoURL: string = '';
  videoURL!: SafeResourceUrl; // Safe URL for the iframe
  @ViewChild('videoIframe') videoIframe!: ElementRef;
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.GetHelperMaterials();
  }
  public GetHelperMaterials() {
    this.dataService.getHelperMaterials().subscribe({
      next: (v: any) => {
        this.helperMaterials = v;
        console.log(this.helperMaterials);
        this.tableHeaders = Object.keys(this.helperMaterials[0]);
        console.log(this.tableHeaders);
      },
      error: (e) => console.error(e),
    });
  }
  public HandleMaterials(material: any) {
    this.materialsArray = material;
  }
  public OpenVideo(link: string) {
    //this.videoURL = link;
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
  public OpenDocument(link: string){
    window.open(link, '_blank');
  }
  public StopPlayer() {
    // Access iframe element

    const iframe = this.videoIframe.nativeElement;
    iframe.src = iframe.src;
  }
}
