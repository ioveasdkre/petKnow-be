import { Types } from 'mongoose';
import bcrypt from 'bcryptjs';
import {
  courseHierarchys,
  courseHierarchyType,
  shortDescriptions,
  descriptions,
  instructors,
  names,
} from '../../__tests__/courseHierarchyData.test';
import { a_z, lables } from '../../__tests__/customData.test';
import { CourseHierarchy, CourseTag, PlatformCoupons, User } from '../connections/mongoDB';
import { ISubchapter, IChapter, ICourse } from '../models/courseHierarchy.model';
import { ICourseTag } from '../models/courseTag.model';
import { IPlatformCoupons } from '../models/platformCoupons.model';
import { IUser } from '../models/user.model';

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
    const shortDescriptionLength = shortDescriptions.length;
    const descriptionLength = descriptions.length;
    const newData: ICourse[] = [];
    const tagNameArr: string[] = [];

    for (let i = 0; i < data.length; i++) {
      const dataIndex = data[i];

      for (let j = 0; j < dataIndex.length; j++) {
        let discountPrice;
        let discountDate;

        const courseHierarchy = dataIndex[j];
        tagNameArr.push(...courseHierarchy.tag);

        const userIndex = this.generateRandomInt(usersLength);
        const coverIndex = this.generateRandomInt(coversLength);
        const shortDescriptionIndex = this.generateRandomInt(shortDescriptionLength);
        const descriptionIndex = this.generateRandomInt(descriptionLength);

        const user = new Types.ObjectId(users[userIndex]);
        const shortDescription = shortDescriptions[shortDescriptionIndex];
        const description = descriptions[descriptionIndex];
        const tagNames = courseHierarchy.tag;
        const cover = covers[coverIndex];
        const title = courseHierarchy.title;
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

    const test = tagNameArr.filter((item, index) => tagNameArr.indexOf(item) === index);

    console.log(test);

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

  async courseHierarchyManyData() {
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

  async couponManyData(quantity: number) {
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
      const endDate = this.getRandomDate(startDate, '2023/06/31');

      const labelQuantity = this.generateRandomInt(3);

      for (let j = 0; j <= labelQuantity; j++) {
        const lableIndex = this.generateRandomInt(30 - j);
        tagNames.push(newLables[lableIndex]);
        newLables.splice(lableIndex, 1); // 移除已加入的標籤，避免重複加入
      }

      newData.push({
        tagNames,
        couponCode,
        price: discountPrice,
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

  async courseTagManyData() {
    const newData: ICourseTag[] = [];

    const deleteCourseTag = await CourseTag.deleteMany();

    if (!deleteCourseTag.acknowledged) return false;

    // 產生 標籤
    for (let i = 0; i < lables.length; i++) {
      newData.push({
        name: lables[i],
      });
    }

    const result = await CourseTag.insertMany(newData);

    if (result.length === 0) return false;

    return true;
  }

  async userManyData() {
    const newData: IUser[] = [];

    const namesLength = names.length;
    const instructorsLength = instructors.length;
    const deleteUser = await User.deleteMany();

    if (!deleteUser.acknowledged) return false;

    // 產生 標籤
    for (let i = 0; i < namesLength; i++) {
      const email = `Abc123${i}@gmail.com`;
      const password = 'Abc123';
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const namesIndex = this.generateRandomInt(namesLength);
      const instructorsIndex = this.generateRandomInt(instructorsLength);

      const name = names[namesIndex];
      const _instructors = instructors[instructorsIndex];

      newData.push({
        name,
        email,
        password: hashedPassword,
        instructors: _instructors,
      });
    }

    const result = await User.insertMany(newData);

    if (result.length === 0) return false;

    return true;
  }
}

export { FakeInformationService };
