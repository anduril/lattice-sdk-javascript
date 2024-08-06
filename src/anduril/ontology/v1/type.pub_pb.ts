// @generated by protoc-gen-es v1.7.2 with parameter "target=ts"
// @generated from file anduril/ontology/v1/type.pub.proto (package anduril.ontology.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum anduril.ontology.v1.Class
 */
export enum Class {
  /**
   * @generated from enum value: CLASS_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: CLASS_PERSON = 1;
   */
  PERSON = 1,

  /**
   * @generated from enum value: CLASS_CAR = 2;
   */
  CAR = 2,

  /**
   * @generated from enum value: CLASS_ANIMAL = 3;
   */
  ANIMAL = 3,

  /**
   * @generated from enum value: CLASS_AIR_VEHICLE = 4;
   */
  AIR_VEHICLE = 4,

  /**
   * @generated from enum value: CLASS_BICYCLE = 5;
   */
  BICYCLE = 5,

  /**
   * @generated from enum value: CLASS_WATER_VEHICLE = 6;
   */
  WATER_VEHICLE = 6,

  /**
   * @generated from enum value: CLASS_UNKNOWN_VEHICLE = 7;
   */
  UNKNOWN_VEHICLE = 7,

  /**
   * @generated from enum value: CLASS_MISSILE = 8;
   */
  MISSILE = 8,

  /**
   * @generated from enum value: CLASS_UNKNOWN_AIR_VEHICLE = 9;
   */
  UNKNOWN_AIR_VEHICLE = 9,

  /**
   * @generated from enum value: CLASS_BIRD = 10;
   */
  BIRD = 10,

  /**
   * @generated from enum value: CLASS_BACKGROUND = 11;
   */
  BACKGROUND = 11,
}
// Retrieve enum metadata with: proto3.getEnumType(Class)
proto3.util.setEnumType(Class, "anduril.ontology.v1.Class", [
  { no: 0, name: "CLASS_UNKNOWN" },
  { no: 1, name: "CLASS_PERSON" },
  { no: 2, name: "CLASS_CAR" },
  { no: 3, name: "CLASS_ANIMAL" },
  { no: 4, name: "CLASS_AIR_VEHICLE" },
  { no: 5, name: "CLASS_BICYCLE" },
  { no: 6, name: "CLASS_WATER_VEHICLE" },
  { no: 7, name: "CLASS_UNKNOWN_VEHICLE" },
  { no: 8, name: "CLASS_MISSILE" },
  { no: 9, name: "CLASS_UNKNOWN_AIR_VEHICLE" },
  { no: 10, name: "CLASS_BIRD" },
  { no: 11, name: "CLASS_BACKGROUND" },
]);

/**
 * Refers to the relationship of the tracker to the operational object being represented.
 * Maps 1 to 1 with mil-std affiliation. Pending is a default, yet to be classified object.
 * Ranking from most friendly to most hostile:
 * FRIENDLY
 * ASSUMED FRIENDLY
 * NEUTRAL
 * PENDING
 * UNKNOWN
 * SUSPICIOUS
 * HOSTILE
 *
 * @generated from enum anduril.ontology.v1.Disposition
 */
export enum Disposition {
  /**
   * @generated from enum value: DISPOSITION_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: DISPOSITION_FRIENDLY = 1;
   */
  FRIENDLY = 1,

  /**
   * @generated from enum value: DISPOSITION_HOSTILE = 2;
   */
  HOSTILE = 2,

  /**
   * @generated from enum value: DISPOSITION_SUSPICIOUS = 3;
   */
  SUSPICIOUS = 3,

  /**
   * @generated from enum value: DISPOSITION_ASSUMED_FRIENDLY = 4;
   */
  ASSUMED_FRIENDLY = 4,

  /**
   * @generated from enum value: DISPOSITION_NEUTRAL = 5;
   */
  NEUTRAL = 5,

  /**
   * @generated from enum value: DISPOSITION_PENDING = 6;
   */
  PENDING = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(Disposition)
proto3.util.setEnumType(Disposition, "anduril.ontology.v1.Disposition", [
  { no: 0, name: "DISPOSITION_UNKNOWN" },
  { no: 1, name: "DISPOSITION_FRIENDLY" },
  { no: 2, name: "DISPOSITION_HOSTILE" },
  { no: 3, name: "DISPOSITION_SUSPICIOUS" },
  { no: 4, name: "DISPOSITION_ASSUMED_FRIENDLY" },
  { no: 5, name: "DISPOSITION_NEUTRAL" },
  { no: 6, name: "DISPOSITION_PENDING" },
]);

/**
 * Describes the operating environment of an object. For more information refer to MIl-STD 2525d or MIL-STD 6016f.
 * Surface is used to describe objects on-top the water such as boats, while Sub-Surface is used to describe under the
 * water.
 *
 * @generated from enum anduril.ontology.v1.Environment
 */
export enum Environment {
  /**
   * @generated from enum value: ENVIRONMENT_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * @generated from enum value: ENVIRONMENT_AIR = 1;
   */
  AIR = 1,

  /**
   * @generated from enum value: ENVIRONMENT_SURFACE = 2;
   */
  SURFACE = 2,

  /**
   * @generated from enum value: ENVIRONMENT_SUB_SURFACE = 3;
   */
  SUB_SURFACE = 3,

  /**
   * @generated from enum value: ENVIRONMENT_LAND = 4;
   */
  LAND = 4,

  /**
   * @generated from enum value: ENVIRONMENT_SPACE = 5;
   */
  SPACE = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(Environment)
proto3.util.setEnumType(Environment, "anduril.ontology.v1.Environment", [
  { no: 0, name: "ENVIRONMENT_UNKNOWN" },
  { no: 1, name: "ENVIRONMENT_AIR" },
  { no: 2, name: "ENVIRONMENT_SURFACE" },
  { no: 3, name: "ENVIRONMENT_SUB_SURFACE" },
  { no: 4, name: "ENVIRONMENT_LAND" },
  { no: 5, name: "ENVIRONMENT_SPACE" },
]);

/**
 * Describes Nationality or Alliance information.
 *
 * @generated from enum anduril.ontology.v1.Nationality
 */
export enum Nationality {
  /**
   * @generated from enum value: NATIONALITY_INVALID = 0;
   */
  INVALID = 0,

  /**
   * @generated from enum value: NATIONALITY_ALBANIA = 1;
   */
  ALBANIA = 1,

  /**
   * @generated from enum value: NATIONALITY_ALGERIA = 62;
   */
  ALGERIA = 62,

  /**
   * @generated from enum value: NATIONALITY_ARGENTINA = 79;
   */
  ARGENTINA = 79,

  /**
   * @generated from enum value: NATIONALITY_ARMENIA = 2;
   */
  ARMENIA = 2,

  /**
   * @generated from enum value: NATIONALITY_AUSTRALIA = 3;
   */
  AUSTRALIA = 3,

  /**
   * @generated from enum value: NATIONALITY_AUSTRIA = 4;
   */
  AUSTRIA = 4,

  /**
   * @generated from enum value: NATIONALITY_AZERBAIJAN = 5;
   */
  AZERBAIJAN = 5,

  /**
   * @generated from enum value: NATIONALITY_BELARUS = 6;
   */
  BELARUS = 6,

  /**
   * @generated from enum value: NATIONALITY_BELGIUM = 7;
   */
  BELGIUM = 7,

  /**
   * @generated from enum value: NATIONALITY_BOLIVIA = 106;
   */
  BOLIVIA = 106,

  /**
   * @generated from enum value: NATIONALITY_BOSNIA_AND_HERZEGOVINA = 8;
   */
  BOSNIA_AND_HERZEGOVINA = 8,

  /**
   * @generated from enum value: NATIONALITY_BRAZIL = 80;
   */
  BRAZIL = 80,

  /**
   * @generated from enum value: NATIONALITY_BULGARIA = 9;
   */
  BULGARIA = 9,

  /**
   * @generated from enum value: NATIONALITY_CAMBODIA = 68;
   */
  CAMBODIA = 68,

  /**
   * @generated from enum value: NATIONALITY_CANADA = 10;
   */
  CANADA = 10,

  /**
   * @generated from enum value: NATIONALITY_CHILE = 81;
   */
  CHILE = 81,

  /**
   * @generated from enum value: NATIONALITY_CHINA = 72;
   */
  CHINA = 72,

  /**
   * @generated from enum value: NATIONALITY_COLOMBIA = 82;
   */
  COLOMBIA = 82,

  /**
   * @generated from enum value: NATIONALITY_CROATIA = 11;
   */
  CROATIA = 11,

  /**
   * @generated from enum value: NATIONALITY_CUBA = 87;
   */
  CUBA = 87,

  /**
   * @generated from enum value: NATIONALITY_CYPRUS = 53;
   */
  CYPRUS = 53,

  /**
   * @generated from enum value: NATIONALITY_CZECH_REPUBLIC = 12;
   */
  CZECH_REPUBLIC = 12,

  /**
   * @generated from enum value: NATIONALITY_DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA = 74;
   */
  DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA = 74,

  /**
   * @generated from enum value: NATIONALITY_DENMARK = 13;
   */
  DENMARK = 13,

  /**
   * @generated from enum value: NATIONALITY_DOMINICAN_REPUBLIC = 88;
   */
  DOMINICAN_REPUBLIC = 88,

  /**
   * @generated from enum value: NATIONALITY_ECUADOR = 107;
   */
  ECUADOR = 107,

  /**
   * @generated from enum value: NATIONALITY_EGYPT = 54;
   */
  EGYPT = 54,

  /**
   * @generated from enum value: NATIONALITY_ESTONIA = 14;
   */
  ESTONIA = 14,

  /**
   * @generated from enum value: NATIONALITY_ETHIOPIA = 63;
   */
  ETHIOPIA = 63,

  /**
   * @generated from enum value: NATIONALITY_FINLAND = 15;
   */
  FINLAND = 15,

  /**
   * @generated from enum value: NATIONALITY_FRANCE = 16;
   */
  FRANCE = 16,

  /**
   * @generated from enum value: NATIONALITY_GEORGIA = 17;
   */
  GEORGIA = 17,

  /**
   * @generated from enum value: NATIONALITY_GERMANY = 18;
   */
  GERMANY = 18,

  /**
   * @generated from enum value: NATIONALITY_GREECE = 19;
   */
  GREECE = 19,

  /**
   * @generated from enum value: NATIONALITY_GUATEMALA = 108;
   */
  GUATEMALA = 108,

  /**
   * @generated from enum value: NATIONALITY_GUINEA = 92;
   */
  GUINEA = 92,

  /**
   * @generated from enum value: NATIONALITY_HUNGARY = 20;
   */
  HUNGARY = 20,

  /**
   * @generated from enum value: NATIONALITY_ICELAND = 21;
   */
  ICELAND = 21,

  /**
   * @generated from enum value: NATIONALITY_INDIA = 66;
   */
  INDIA = 66,

  /**
   * @generated from enum value: NATIONALITY_INDONESIA = 103;
   */
  INDONESIA = 103,

  /**
   * @generated from enum value: NATIONALITY_INTERNATIONAL_RED_CROSS = 113;
   */
  INTERNATIONAL_RED_CROSS = 113,

  /**
   * @generated from enum value: NATIONALITY_IRAQ = 56;
   */
  IRAQ = 56,

  /**
   * @generated from enum value: NATIONALITY_IRELAND = 22;
   */
  IRELAND = 22,

  /**
   * @generated from enum value: NATIONALITY_ISLAMIC_REPUBLIC_OF_IRAN = 55;
   */
  ISLAMIC_REPUBLIC_OF_IRAN = 55,

  /**
   * @generated from enum value: NATIONALITY_ISRAEL = 57;
   */
  ISRAEL = 57,

  /**
   * @generated from enum value: NATIONALITY_ITALY = 23;
   */
  ITALY = 23,

  /**
   * @generated from enum value: NATIONALITY_JAMAICA = 112;
   */
  JAMAICA = 112,

  /**
   * @generated from enum value: NATIONALITY_JAPAN = 76;
   */
  JAPAN = 76,

  /**
   * @generated from enum value: NATIONALITY_JORDAN = 58;
   */
  JORDAN = 58,

  /**
   * @generated from enum value: NATIONALITY_KAZAKHSTAN = 24;
   */
  KAZAKHSTAN = 24,

  /**
   * @generated from enum value: NATIONALITY_KUWAIT = 90;
   */
  KUWAIT = 90,

  /**
   * @generated from enum value: NATIONALITY_KYRGHYZ_REPUBLIC = 25;
   */
  KYRGHYZ_REPUBLIC = 25,

  /**
   * @generated from enum value: NATIONALITY_LAO_PEOPLES_DEMOCRATIC_REPUBLIC = 69;
   */
  LAO_PEOPLES_DEMOCRATIC_REPUBLIC = 69,

  /**
   * @generated from enum value: NATIONALITY_LATVIA = 26;
   */
  LATVIA = 26,

  /**
   * @generated from enum value: NATIONALITY_LEBANON = 59;
   */
  LEBANON = 59,

  /**
   * @generated from enum value: NATIONALITY_LIBERIA = 64;
   */
  LIBERIA = 64,

  /**
   * @generated from enum value: NATIONALITY_LITHUANIA = 27;
   */
  LITHUANIA = 27,

  /**
   * @generated from enum value: NATIONALITY_LUXEMBOURG = 28;
   */
  LUXEMBOURG = 28,

  /**
   * @generated from enum value: NATIONALITY_MADAGASCAR = 93;
   */
  MADAGASCAR = 93,

  /**
   * @generated from enum value: NATIONALITY_MALAYSIA = 104;
   */
  MALAYSIA = 104,

  /**
   * @generated from enum value: NATIONALITY_MALTA = 29;
   */
  MALTA = 29,

  /**
   * @generated from enum value: NATIONALITY_MEXICO = 83;
   */
  MEXICO = 83,

  /**
   * @generated from enum value: NATIONALITY_MOLDOVA = 30;
   */
  MOLDOVA = 30,

  /**
   * @generated from enum value: NATIONALITY_MONTENEGRO = 31;
   */
  MONTENEGRO = 31,

  /**
   * @generated from enum value: NATIONALITY_MOROCCO = 94;
   */
  MOROCCO = 94,

  /**
   * @generated from enum value: NATIONALITY_MYANMAR = 102;
   */
  MYANMAR = 102,

  /**
   * @generated from enum value: NATIONALITY_NATO = 32;
   */
  NATO = 32,

  /**
   * @generated from enum value: NATIONALITY_NETHERLANDS = 33;
   */
  NETHERLANDS = 33,

  /**
   * @generated from enum value: NATIONALITY_NEW_ZEALAND = 78;
   */
  NEW_ZEALAND = 78,

  /**
   * @generated from enum value: NATIONALITY_NICARAGUA = 109;
   */
  NICARAGUA = 109,

  /**
   * @generated from enum value: NATIONALITY_NIGERIA = 95;
   */
  NIGERIA = 95,

  /**
   * @generated from enum value: NATIONALITY_NORWAY = 34;
   */
  NORWAY = 34,

  /**
   * @generated from enum value: NATIONALITY_PAKISTAN = 67;
   */
  PAKISTAN = 67,

  /**
   * @generated from enum value: NATIONALITY_PANAMA = 84;
   */
  PANAMA = 84,

  /**
   * @generated from enum value: NATIONALITY_PARAGUAY = 110;
   */
  PARAGUAY = 110,

  /**
   * @generated from enum value: NATIONALITY_PERU = 85;
   */
  PERU = 85,

  /**
   * @generated from enum value: NATIONALITY_PHILIPPINES = 77;
   */
  PHILIPPINES = 77,

  /**
   * @generated from enum value: NATIONALITY_POLAND = 35;
   */
  POLAND = 35,

  /**
   * @generated from enum value: NATIONALITY_PORTUGAL = 36;
   */
  PORTUGAL = 36,

  /**
   * @generated from enum value: NATIONALITY_REPUBLIC_OF_KOREA = 75;
   */
  REPUBLIC_OF_KOREA = 75,

  /**
   * @generated from enum value: NATIONALITY_ROMANIA = 37;
   */
  ROMANIA = 37,

  /**
   * @generated from enum value: NATIONALITY_RUSSIA = 38;
   */
  RUSSIA = 38,

  /**
   * @generated from enum value: NATIONALITY_SAUDI_ARABIA = 60;
   */
  SAUDI_ARABIA = 60,

  /**
   * @generated from enum value: NATIONALITY_SENEGAL = 96;
   */
  SENEGAL = 96,

  /**
   * @generated from enum value: NATIONALITY_SERBIA = 39;
   */
  SERBIA = 39,

  /**
   * @generated from enum value: NATIONALITY_SINGAPORE = 105;
   */
  SINGAPORE = 105,

  /**
   * @generated from enum value: NATIONALITY_SLOVAKIA = 40;
   */
  SLOVAKIA = 40,

  /**
   * @generated from enum value: NATIONALITY_SLOVENIA = 41;
   */
  SLOVENIA = 41,

  /**
   * @generated from enum value: NATIONALITY_SOUTH_AFRICA = 65;
   */
  SOUTH_AFRICA = 65,

  /**
   * @generated from enum value: NATIONALITY_SPAIN = 42;
   */
  SPAIN = 42,

  /**
   * @generated from enum value: NATIONALITY_SUDAN = 98;
   */
  SUDAN = 98,

  /**
   * @generated from enum value: NATIONALITY_SWEDEN = 43;
   */
  SWEDEN = 43,

  /**
   * @generated from enum value: NATIONALITY_SWITZERLAND = 44;
   */
  SWITZERLAND = 44,

  /**
   * @generated from enum value: NATIONALITY_SYRIAN_ARAB_REPUBLIC = 61;
   */
  SYRIAN_ARAB_REPUBLIC = 61,

  /**
   * @generated from enum value: NATIONALITY_TAIWAN_PROVINCE_OF_CHINA = 73;
   */
  TAIWAN_PROVINCE_OF_CHINA = 73,

  /**
   * @generated from enum value: NATIONALITY_TAJIKISTAN = 45;
   */
  TAJIKISTAN = 45,

  /**
   * @generated from enum value: NATIONALITY_THAILAND = 70;
   */
  THAILAND = 70,

  /**
   * @generated from enum value: NATIONALITY_THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA = 46;
   */
  THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA = 46,

  /**
   * @generated from enum value: NATIONALITY_TUNISIA = 100;
   */
  TUNISIA = 100,

  /**
   * @generated from enum value: NATIONALITY_TURKEY = 47;
   */
  TURKEY = 47,

  /**
   * @generated from enum value: NATIONALITY_TURKMENISTAN = 48;
   */
  TURKMENISTAN = 48,

  /**
   * @generated from enum value: NATIONALITY_UGANDA = 101;
   */
  UGANDA = 101,

  /**
   * @generated from enum value: NATIONALITY_UKRAINE = 49;
   */
  UKRAINE = 49,

  /**
   * @generated from enum value: NATIONALITY_UNITED_KINGDOM = 50;
   */
  UNITED_KINGDOM = 50,

  /**
   * @generated from enum value: NATIONALITY_UNITED_NATIONS = 89;
   */
  UNITED_NATIONS = 89,

  /**
   * @generated from enum value: NATIONALITY_UNITED_REPUBLIC_OF_TANZANIA = 99;
   */
  UNITED_REPUBLIC_OF_TANZANIA = 99,

  /**
   * @generated from enum value: NATIONALITY_UNITED_STATES_OF_AMERICA = 51;
   */
  UNITED_STATES_OF_AMERICA = 51,

  /**
   * @generated from enum value: NATIONALITY_URUGUAY = 111;
   */
  URUGUAY = 111,

  /**
   * @generated from enum value: NATIONALITY_UZBEKISTAN = 52;
   */
  UZBEKISTAN = 52,

  /**
   * @generated from enum value: NATIONALITY_VENEZUELA = 86;
   */
  VENEZUELA = 86,

  /**
   * @generated from enum value: NATIONALITY_VIETNAM = 71;
   */
  VIETNAM = 71,

  /**
   * @generated from enum value: NATIONALITY_YEMEN = 91;
   */
  YEMEN = 91,

  /**
   * @generated from enum value: NATIONALITY_ZIMBABWE = 97;
   */
  ZIMBABWE = 97,
}
// Retrieve enum metadata with: proto3.getEnumType(Nationality)
proto3.util.setEnumType(Nationality, "anduril.ontology.v1.Nationality", [
  { no: 0, name: "NATIONALITY_INVALID" },
  { no: 1, name: "NATIONALITY_ALBANIA" },
  { no: 62, name: "NATIONALITY_ALGERIA" },
  { no: 79, name: "NATIONALITY_ARGENTINA" },
  { no: 2, name: "NATIONALITY_ARMENIA" },
  { no: 3, name: "NATIONALITY_AUSTRALIA" },
  { no: 4, name: "NATIONALITY_AUSTRIA" },
  { no: 5, name: "NATIONALITY_AZERBAIJAN" },
  { no: 6, name: "NATIONALITY_BELARUS" },
  { no: 7, name: "NATIONALITY_BELGIUM" },
  { no: 106, name: "NATIONALITY_BOLIVIA" },
  { no: 8, name: "NATIONALITY_BOSNIA_AND_HERZEGOVINA" },
  { no: 80, name: "NATIONALITY_BRAZIL" },
  { no: 9, name: "NATIONALITY_BULGARIA" },
  { no: 68, name: "NATIONALITY_CAMBODIA" },
  { no: 10, name: "NATIONALITY_CANADA" },
  { no: 81, name: "NATIONALITY_CHILE" },
  { no: 72, name: "NATIONALITY_CHINA" },
  { no: 82, name: "NATIONALITY_COLOMBIA" },
  { no: 11, name: "NATIONALITY_CROATIA" },
  { no: 87, name: "NATIONALITY_CUBA" },
  { no: 53, name: "NATIONALITY_CYPRUS" },
  { no: 12, name: "NATIONALITY_CZECH_REPUBLIC" },
  { no: 74, name: "NATIONALITY_DEMOCRATIC_PEOPLES_REPUBLIC_OF_KOREA" },
  { no: 13, name: "NATIONALITY_DENMARK" },
  { no: 88, name: "NATIONALITY_DOMINICAN_REPUBLIC" },
  { no: 107, name: "NATIONALITY_ECUADOR" },
  { no: 54, name: "NATIONALITY_EGYPT" },
  { no: 14, name: "NATIONALITY_ESTONIA" },
  { no: 63, name: "NATIONALITY_ETHIOPIA" },
  { no: 15, name: "NATIONALITY_FINLAND" },
  { no: 16, name: "NATIONALITY_FRANCE" },
  { no: 17, name: "NATIONALITY_GEORGIA" },
  { no: 18, name: "NATIONALITY_GERMANY" },
  { no: 19, name: "NATIONALITY_GREECE" },
  { no: 108, name: "NATIONALITY_GUATEMALA" },
  { no: 92, name: "NATIONALITY_GUINEA" },
  { no: 20, name: "NATIONALITY_HUNGARY" },
  { no: 21, name: "NATIONALITY_ICELAND" },
  { no: 66, name: "NATIONALITY_INDIA" },
  { no: 103, name: "NATIONALITY_INDONESIA" },
  { no: 113, name: "NATIONALITY_INTERNATIONAL_RED_CROSS" },
  { no: 56, name: "NATIONALITY_IRAQ" },
  { no: 22, name: "NATIONALITY_IRELAND" },
  { no: 55, name: "NATIONALITY_ISLAMIC_REPUBLIC_OF_IRAN" },
  { no: 57, name: "NATIONALITY_ISRAEL" },
  { no: 23, name: "NATIONALITY_ITALY" },
  { no: 112, name: "NATIONALITY_JAMAICA" },
  { no: 76, name: "NATIONALITY_JAPAN" },
  { no: 58, name: "NATIONALITY_JORDAN" },
  { no: 24, name: "NATIONALITY_KAZAKHSTAN" },
  { no: 90, name: "NATIONALITY_KUWAIT" },
  { no: 25, name: "NATIONALITY_KYRGHYZ_REPUBLIC" },
  { no: 69, name: "NATIONALITY_LAO_PEOPLES_DEMOCRATIC_REPUBLIC" },
  { no: 26, name: "NATIONALITY_LATVIA" },
  { no: 59, name: "NATIONALITY_LEBANON" },
  { no: 64, name: "NATIONALITY_LIBERIA" },
  { no: 27, name: "NATIONALITY_LITHUANIA" },
  { no: 28, name: "NATIONALITY_LUXEMBOURG" },
  { no: 93, name: "NATIONALITY_MADAGASCAR" },
  { no: 104, name: "NATIONALITY_MALAYSIA" },
  { no: 29, name: "NATIONALITY_MALTA" },
  { no: 83, name: "NATIONALITY_MEXICO" },
  { no: 30, name: "NATIONALITY_MOLDOVA" },
  { no: 31, name: "NATIONALITY_MONTENEGRO" },
  { no: 94, name: "NATIONALITY_MOROCCO" },
  { no: 102, name: "NATIONALITY_MYANMAR" },
  { no: 32, name: "NATIONALITY_NATO" },
  { no: 33, name: "NATIONALITY_NETHERLANDS" },
  { no: 78, name: "NATIONALITY_NEW_ZEALAND" },
  { no: 109, name: "NATIONALITY_NICARAGUA" },
  { no: 95, name: "NATIONALITY_NIGERIA" },
  { no: 34, name: "NATIONALITY_NORWAY" },
  { no: 67, name: "NATIONALITY_PAKISTAN" },
  { no: 84, name: "NATIONALITY_PANAMA" },
  { no: 110, name: "NATIONALITY_PARAGUAY" },
  { no: 85, name: "NATIONALITY_PERU" },
  { no: 77, name: "NATIONALITY_PHILIPPINES" },
  { no: 35, name: "NATIONALITY_POLAND" },
  { no: 36, name: "NATIONALITY_PORTUGAL" },
  { no: 75, name: "NATIONALITY_REPUBLIC_OF_KOREA" },
  { no: 37, name: "NATIONALITY_ROMANIA" },
  { no: 38, name: "NATIONALITY_RUSSIA" },
  { no: 60, name: "NATIONALITY_SAUDI_ARABIA" },
  { no: 96, name: "NATIONALITY_SENEGAL" },
  { no: 39, name: "NATIONALITY_SERBIA" },
  { no: 105, name: "NATIONALITY_SINGAPORE" },
  { no: 40, name: "NATIONALITY_SLOVAKIA" },
  { no: 41, name: "NATIONALITY_SLOVENIA" },
  { no: 65, name: "NATIONALITY_SOUTH_AFRICA" },
  { no: 42, name: "NATIONALITY_SPAIN" },
  { no: 98, name: "NATIONALITY_SUDAN" },
  { no: 43, name: "NATIONALITY_SWEDEN" },
  { no: 44, name: "NATIONALITY_SWITZERLAND" },
  { no: 61, name: "NATIONALITY_SYRIAN_ARAB_REPUBLIC" },
  { no: 73, name: "NATIONALITY_TAIWAN_PROVINCE_OF_CHINA" },
  { no: 45, name: "NATIONALITY_TAJIKISTAN" },
  { no: 70, name: "NATIONALITY_THAILAND" },
  { no: 46, name: "NATIONALITY_THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA" },
  { no: 100, name: "NATIONALITY_TUNISIA" },
  { no: 47, name: "NATIONALITY_TURKEY" },
  { no: 48, name: "NATIONALITY_TURKMENISTAN" },
  { no: 101, name: "NATIONALITY_UGANDA" },
  { no: 49, name: "NATIONALITY_UKRAINE" },
  { no: 50, name: "NATIONALITY_UNITED_KINGDOM" },
  { no: 89, name: "NATIONALITY_UNITED_NATIONS" },
  { no: 99, name: "NATIONALITY_UNITED_REPUBLIC_OF_TANZANIA" },
  { no: 51, name: "NATIONALITY_UNITED_STATES_OF_AMERICA" },
  { no: 111, name: "NATIONALITY_URUGUAY" },
  { no: 52, name: "NATIONALITY_UZBEKISTAN" },
  { no: 86, name: "NATIONALITY_VENEZUELA" },
  { no: 71, name: "NATIONALITY_VIETNAM" },
  { no: 91, name: "NATIONALITY_YEMEN" },
  { no: 97, name: "NATIONALITY_ZIMBABWE" },
]);

/**
 * An ObjectType describes the type of object within the ontology and its disposition.
 *
 * @generated from message anduril.ontology.v1.ObjectType
 */
export class ObjectType extends Message<ObjectType> {
  /**
   * @generated from field: anduril.ontology.v1.Class class = 1;
   */
  class = Class.UNKNOWN;

  /**
   * @generated from field: anduril.ontology.v1.Disposition disposition = 2;
   */
  disposition = Disposition.UNKNOWN;

  /**
   * @generated from field: anduril.ontology.v1.Environment environment = 3;
   */
  environment = Environment.UNKNOWN;

  constructor(data?: PartialMessage<ObjectType>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "anduril.ontology.v1.ObjectType";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class", kind: "enum", T: proto3.getEnumType(Class) },
    { no: 2, name: "disposition", kind: "enum", T: proto3.getEnumType(Disposition) },
    { no: 3, name: "environment", kind: "enum", T: proto3.getEnumType(Environment) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectType {
    return new ObjectType().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectType {
    return new ObjectType().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectType {
    return new ObjectType().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectType | PlainMessage<ObjectType> | undefined, b: ObjectType | PlainMessage<ObjectType> | undefined): boolean {
    return proto3.util.equals(ObjectType, a, b);
  }
}
