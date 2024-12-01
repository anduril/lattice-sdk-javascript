// @generated by protoc-gen-es v2.2.0
// @generated from file anduril/ontology/v1/type.pub.proto (package anduril.ontology.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file anduril/ontology/v1/type.pub.proto.
 */
export declare const file_anduril_ontology_v1_type_pub: GenFile;

/**
 * An ObjectType describes the type of object within the ontology and its disposition.
 *
 * @generated from message anduril.ontology.v1.ObjectType
 */
export declare type ObjectType = Message<"anduril.ontology.v1.ObjectType"> & {
  /**
   * @generated from field: anduril.ontology.v1.Class class = 1;
   */
  class: Class;

  /**
   * @generated from field: anduril.ontology.v1.Disposition disposition = 2;
   */
  disposition: Disposition;

  /**
   * @generated from field: anduril.ontology.v1.Environment environment = 3;
   */
  environment: Environment;
};

/**
 * Describes the message anduril.ontology.v1.ObjectType.
 * Use `create(ObjectTypeSchema)` to create a new message.
 */
export declare const ObjectTypeSchema: GenMessage<ObjectType>;

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

/**
 * Describes the enum anduril.ontology.v1.Class.
 */
export declare const ClassSchema: GenEnum<Class>;

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

/**
 * Describes the enum anduril.ontology.v1.Disposition.
 */
export declare const DispositionSchema: GenEnum<Disposition>;

/**
 * Describes the operating environment of an object. For more information refer to MIL-STD 2525D.
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

/**
 * Describes the enum anduril.ontology.v1.Environment.
 */
export declare const EnvironmentSchema: GenEnum<Environment>;

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

/**
 * Describes the enum anduril.ontology.v1.Nationality.
 */
export declare const NationalitySchema: GenEnum<Nationality>;

