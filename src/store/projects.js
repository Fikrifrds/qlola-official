import slugify from '../utils/slugify';
import {
  p1, p2, p3, p4, p5, p6,
} from './ProjectImages';

const originalHostName = 'https://qlola-storage.s3-ap-southeast-1.amazonaws.com/';
const thumbnailHostname = 'https://ik.imagekit.io/qlola/tr:w-300/';

const projects = [
  {
    id: 1,
    title: 'My Truck',
    slug() {
      return slugify(this.title);
    },
    description: {
      en: 'Fleet Repair Management System',
      id: 'Sistem Pengelolaan Perbaikan Armada',
    },
    imgPathName: 'images/project1/project1.png',
    originalHostName,
    thumbnailHostname,
    content: {
      en: 'We Build a SaaS system to help MyTruck provide an application to manage truck repair.',
      id: 'Kami membangun SaaS system untuk membantu MyTruck menyediakan aplikasi yang dapat mengatur perbaikan truk.',
    },
    url: 'https://mytruck.herokuapp.com',
    imageCollectionPathName: p1,
  },
  {
    id: 2,
    title: 'Alidjaja',
    slug() {
      return slugify(this.title);
    },
    description: {
      en: 'E-Commerce System',
      id: 'Sistem Toko Online',
    },
    imgPathName: 'images/project2/project2.png',
    originalHostName,
    thumbnailHostname,
    content: {
      en: 'We Build an E-Commerce system to Alidjaja Auto Part so they can sell auto parts online.',
      id: 'Kami membangun toko online untuk  Alidjaja Auto Part, sehingga mereka dapat menjual produknya secara online.',
    },
    url: 'http://alidjaja.qlola.com',
    imageCollectionPathName: p2,
  },
  {
    id: 3,
    title: 'Room Scheduling App',
    description: {
      en: 'Room Scheduling App in Chemical Engineering Department - ITS',
      id: 'Aplikasi peminjaman ruang di lingkungan Departemen Teknik Kimia - ITS',
    },
    slug() {
      return slugify(this.title);
    },
    imgPathName: 'images/project3/project3.png',
    originalHostName,
    thumbnailHostname,
    content: {
      en: 'We Build Room Scheduling App to manage Room Booking in Chemical Engineering Department - Sepuluh Nopember Institute of Technology.',
      id: 'Kami membangun Aplikasi peminjaman ruang untuk mengatur peminjaman ruang di lingkungan departemen Teknik Kimia - Intitut Teknologi Sepuluh Nopember.',
    },
    url: 'http://ruangdtkim.qlola.com',
    imageCollectionPathName: p3,
  },
  {
    id: 4,
    title: 'Thesis Management',
    description: {
      en: 'Thesis Management App in Chemical Engineering Department - ITS',
      id: 'Aplikasi pendaftaran tugas akhir di lingkungan Departemen Teknik Kimia - ITS',
    },
    slug() {
      return slugify(this.title);
    },
    imgPathName: 'images/project4/project4.png',
    originalHostName,
    thumbnailHostname,
    content: {
      en: 'Thesis Management in Chemical Engineering Department - Sepuluh Nopember Institute of Technology.',
      id: 'Kami membangun aplikasi untuk mengatur pendaftaran tugas akhir di lingkungan departemen Teknik Kimia - Intitut Teknologi Sepuluh Nopember.',
    },
    url: 'http://www.tugasakhirdtkim.com',
    imageCollectionPathName: p4,
  },
  {
    id: 5,
    title: 'PT. Eka Mas Motor',
    slug() {
      return slugify(this.title);
    },
    description: {
      en: 'Company Profile Website / Landing Page',
      id: 'Website Company Profile / Landing Page',
    },
    imgPathName: 'images/project5/project5.png',
    originalHostName,
    thumbnailHostname,
    content: {
      en: 'PT. Eka Mas Motor is an Auto Part Supplier that has many clients in Indonesia, we help them to provide a digital presence so they can reach bigger market.',
      id: 'PT. Eka Mas Motor adalah penyedia spare part mobil yang mempunyai banyak pelanggan yang tersebar di banyak wilayah di Indonesia, kami membantu mereka menyedia website sehingga mereka dapat lebih banyak meraih pelanggan.',
    },
    url: 'https://fikrifrds.github.io/ptekamasmotor',
    imageCollectionPathName: p5,
  },
  {
    id: 6,
    title: 'Point of Sales',
    slug() {
      return slugify(this.title);
    },
    description: {
      en: 'Point of Sales',
      id: 'Aplikasi Kasir Online',
    },
    imgPathName: 'images/project6/pos.png',
    originalHostName,
    thumbnailHostname,
    content: {
      en: 'We build Point of Sales Web Application can be used to manage sales in various businesses',
      id: 'Kami membangun aplikasi berbasis web, kasir online, yang digunakan untuk mengelola penjualan di berbagai macam bisnis',
    },
    url: 'https://pos.qlola.com/',
    imageCollectionPathName: p6,
  },
];

export default projects;
