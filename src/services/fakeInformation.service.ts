import { Types } from 'mongoose';
import { courseHierarchys, courseHierarchyType } from '../../__tests__/courseHierarchyData.test';
import { a_z, lables } from '../../__tests__/customData.test';
import { CourseHierarchy, PlatformCoupons, User } from '../connections/mongoDB';
import { ISubchapter, IChapter, ICourse } from '../models/mongoDB/courseHierarchy.model';
import { IPlatformCoupons } from '../models/mongoDB/platformCoupons.model';

class FakeInformationService {
  private generateRandomInt(max: number) {
    if (max !== 0) return Math.floor(Math.random() * max);
    return Math.random();
  }

  private getRandomDate(start: string | number | Date, end: string | number) {
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();
    const randomTimestamp = startDate + Math.random() * (endDate - startDate);
    const randomDate = new Date(randomTimestamp);

    return randomDate;
  }

  private getDiscountDateScope() {
    return [new Date().getTime() + 15 * 86400000, new Date().getTime() + 30 * 86400000];
  }

  private generateRandomCourseHierarchy(
    users: string[],
    data: courseHierarchyType[][],
    covers: string[],
    fileNames: string[],
    v: number,
  ) {
    const coversLength = covers.length;
    const usersLength = users.length;
    const fileNameLength = fileNames.length;
    const newData: ICourse[] = [];

    for (let i = 0; i < data.length; i++) {
      const dataIndex = data[i];

      for (let j = 0; j < dataIndex.length; j++) {
        let discountPrice;
        let discountDate;

        const courseHierarchy = dataIndex[j];

        const userIndex = this.generateRandomInt(usersLength);
        const coverIndex = this.generateRandomInt(coversLength);

        const user = new Types.ObjectId(users[userIndex]);
        const tagNames = courseHierarchy.tag;
        const cover = covers[coverIndex];
        const title = courseHierarchy.title;
        const shortDescription =
          '犬學堂於2009年成立，至今超過13年，絕對係香港最具規模、實力既狗狗酒店、樂園、訓練中心。我們主要提供狗隻訓練，並設有狗酒店、狗泳池、狗公園、狗餐廳等設施及服務。主要訓練課程：- 30日基本訓練寄宿課程- 45日高級訓練寄宿課程';
        const description =
          '本課程適合對象 ：家有幼犬之飼主。您將能夠透過本課程獲得：基礎幼犬互動訓練提高幼犬社會化經驗提高幼犬於外界環境之適應力習得犬隻基礎馴養技巧幼犬性格尚未成長完全，正是適合進行各項訓練的年齡段！無論您是已有馴養經驗、亦或是初次飼養幼犬隻飼主，您都能夠透過本課程獲得基礎寵物訓練的知識與技巧。本課程將幫助您透過各項技巧提高犬隻社會化與性格穩定度 .....   查看更多立即購課';
        const level = this.generateRandomInt(4);
        const price = this.generateRandomInt(10000);
        const enrollmentCount = this.generateRandomInt(100000);
        const totalTime = this.generateRandomInt(600000);
        const totalNumber = this.generateRandomInt(100);
        const isFree = this.generateRandomInt(10) === 0 ? true : false;
        const isPopular = 0 === this.generateRandomInt(10);
        const isPublished = this.generateRandomInt(10) > 0 ? true : false;
        const createdAt = this.getRandomDate('2022/01/01', '2023/05/31');
        const shelfDate = this.getRandomDate(createdAt, '2023/06/31');
        const updatedAt = this.getRandomDate(createdAt, '2023/06/31');
        const chapterArr: IChapter[] = [];

        const isDiscount = this.generateRandomInt(10) < 3 ? true : false;

        if (isDiscount) {
          discountPrice = Math.trunc(price * this.generateRandomInt(0));
          const [startDate, endDate] = this.getDiscountDateScope();
          discountDate = this.getRandomDate(startDate, endDate);
        }

        const chapters = courseHierarchy.chapters;
        for (let k = 0; k < chapters.length; k++) {
          const subchapterArr: ISubchapter[] = [];
          const chapter = chapters[k];

          const chapter_id = `${a_z[i]}00${v}${j}${k}`;
          const chapter_sequence = k + 1;
          const chapter_title = chapter.title;
          const chapter_totalTime = this.generateRandomInt(totalTime);
          const chapter_totalNumber = this.generateRandomInt(totalNumber);

          const subchapters = chapter.subchapters;
          for (let l = 0; l < subchapters.length; l++) {
            const subchapter = subchapters[l];
            const fileNameIndex = this.generateRandomInt(fileNameLength);

            const subchapter_id = `${a_z[i]}00${v}${j}${k}${l}`;
            const subchapter_sequence = l + 1;
            const subchapter_title = subchapter.title;
            const fileName = fileNames[fileNameIndex];
            const fileType = 0;
            const subchapter_time = this.generateRandomInt(chapter_totalTime);

            subchapterArr.push({
              _id: subchapter_id,
              sequence: subchapter_sequence,
              title: subchapter_title,
              fileName,
              fileType,
              time: subchapter_time,
            });
          }

          chapterArr.push({
            _id: chapter_id,
            sequence: chapter_sequence,
            title: chapter_title,
            totalTime: chapter_totalTime,
            totalNumber: chapter_totalNumber,
            subchapters: subchapterArr,
          });
        }

        newData.push({
          user,
          tagNames,
          cover,
          title,
          shortDescription,
          description,
          level,
          price,
          discountPrice,
          enrollmentCount,
          totalTime,
          totalNumber,
          isFree,
          isPopular,
          isPublished,
          discountDate,
          shelfDate,
          createdAt,
          updatedAt,
          chapters: chapterArr,
        });
      }
    }

    return newData;
  }

  private generateCouponCode(length: number) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var couponCode = '';

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      couponCode += characters.charAt(randomIndex);
    }

    return couponCode;
  }

  async GenerateManyData() {
    const { dogCovers, catCovers, petCovers, fileNames, dagData, catData, petData } =
      courseHierarchys;
    const newData: ICourse[] = [];

    const users: string[] = await User.distinct('_id');

    const deleteCourseHierarchy = await CourseHierarchy.deleteMany();

    if (!deleteCourseHierarchy.acknowledged) return false;

    newData.push(...this.generateRandomCourseHierarchy(users, dagData, dogCovers, fileNames, 0));
    newData.push(...this.generateRandomCourseHierarchy(users, catData, catCovers, fileNames, 1));
    newData.push(...this.generateRandomCourseHierarchy(users, petData, petCovers, fileNames, 2));

    const result = await CourseHierarchy.insertMany(newData);

    if (result.length === 0) return false;

    return true;
  }

  async CouponManyData(quantity: number) {
    const newData: IPlatformCoupons[] = [];

    const deleteplatformCoupons = await PlatformCoupons.deleteMany();

    if (!deleteplatformCoupons.acknowledged) return false;

    // 產生 quantity組優惠碼
    for (let i = 0; i < quantity; i++) {
      const tagNames: string[] = [];
      const newLables = [...lables];

      const couponCode = this.generateCouponCode(8);
      const discountPrice = this.generateRandomInt(1000) + 1;
      const isEnabled = this.generateRandomInt(10) !== 0 ? true : false;
      const createdAt = this.getRandomDate('2022/01/01', '2023/05/31');
      const updatedAt = this.getRandomDate(createdAt, '2023/06/31');
      const startDate = this.getRandomDate(createdAt, '2023/06/31');
      const endDate = this.getRandomDate(createdAt, '2023/06/31');

      const labelQuantity = this.generateRandomInt(3);

      for (let j = 0; j <= labelQuantity; j++) {
        const lableIndex = this.generateRandomInt(30 - j);
        tagNames.push(newLables[lableIndex]);
        newLables.splice(lableIndex, 1); // 移除已加入的標籤，避免重複加入
      }

      newData.push({
        tagNames,
        couponCode,
        discountPrice,
        isEnabled,
        startDate,
        endDate,
        createdAt,
        updatedAt,
      });
    }

    const result = await PlatformCoupons.insertMany(newData);

    if (result.length === 0) return false;

    return true;
  }
}

export { FakeInformationService };
