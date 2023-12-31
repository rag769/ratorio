
// デバッグファイル読み込みチェック
DebugFileIncludeCheck();



/**
 * モンスターグループデータ作成クラス.
 */
function CMonsterGroupDataMaker () {

}



/**
 * IDを定義する.
 * @param name 定数名
 * @param value 定数値
 * @return 定数値
 */
CMonsterGroupDataMaker.RegisterId = function (name, value) {
	if (name != "MONSTER_GROUP_ID_UNKNOWN") {
		CGlobalConstManager.DefineEnum("EnumMonsterGroupId", [name], value, undefined);
	}
	return value;
};





//********************************************************************************************************************************
//********************************************************************************************************************************
//****
//**** モンスターグループデータ定義
//****
//********************************************************************************************************************************
//********************************************************************************************************************************

/**
 * データ定義を上書き定義する.
 */
CMonsterGroupDataMaker.OverrideData = function () {

	var monsterGroupId = 0;
	var monsterGroupData = null;

	// データ配列オブジェクトを上書き定義していく
	MonsterGroupOBJ = new Array();



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MANUKU", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_NEPENTES,
		MONSTER_ID_HILLSLION,
		MONSTER_ID_TATACHO,
		MONSTER_ID_SENTIPIDO_YOCHU,
		MONSTER_ID_SENTIPIDO,
		MONSTER_ID_HARDROCK_MANMOS,
		MONSTER_ID_BRADIUM_GOLEM,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_SPRENDED", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_PINGIKYURA,
		MONSTER_ID_RUSIORA_VESPA,
		MONSTER_ID_COLNUS,
		MONSTER_ID_NAGA,
		MONSTER_ID_TENDRIRURION,
		MONSTER_ID_DARK_PINGIKYURA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MOROC", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_MOROCNO_UTSUSHIMI_TENSHIKATA,
		MONSTER_ID_MOROCNO_UTSUSHIMI_BUSSHITSUKATA,
		MONSTER_ID_MOROCNO_UTSUSHIMI_NINGENKATA,
		MONSTER_ID_MOROCNO_UTSUSHIMI_SEREKATA,
		MONSTER_ID_MAO_MOROC,
		MONSTER_ID_KIZUTSUITA_MAO_MOROC,
		MONSTER_ID_FLAME_CONDOR,
		MONSTER_ID_FLAME_FRILLDRA,
		MONSTER_ID_FLAME_GOLEM,
		MONSTER_ID_FLAME_SANDMAN,
		MONSTER_ID_FLAME_BUG,
		MONSTER_ID_ENKANO_MOROCNO_UTSUSHIMI,
		MONSTER_ID_YUGANDA_MOROCNO_UTSUSHIMI,
		MONSTER_ID_REIKINO_MOROCNO_UTSUSHIMI,
		MONSTER_ID_SEIZYANO_ORCBABY,
		MONSTER_ID_SEIZYANO_KO_DESSERT_WOLF,
		MONSTER_ID_SEIZYANO_MARINESPHERE,
		MONSTER_ID_SEIZYANO_ORCWORRIOR,
		MONSTER_ID_SEIZYANO_DESSERT_WOLF,
		MONSTER_ID_SEIZYANO_PHEN,
		MONSTER_ID_SHISHANO_ORCZOMBIE,
		MONSTER_ID_SHISHANO_BERIT,
		MONSTER_ID_SHISHANO_MEGARODON,
		MONSTER_ID_SHINIGAMI_UNK,
		MONSTER_ID_MORS_GHOLE,
		MONSTER_ID_MORS_OSIRIS,
		MONSTER_ID_MORS_ARCHER,
		MONSTER_ID_MORS_WRAITH,
		MONSTER_ID_MORS_BERIT,
		MONSTER_ID_MORS_ROOD,
		MONSTER_ID_MORS_PLANKTON,
		MONSTER_ID_MOROC_QUESTION,
		MONSTER_ID_MORS_MADOSHI,
		MONSTER_ID_MORS_NECROMANCER,
		MONSTER_ID_FLOST_SPIDER,
		MONSTER_ID_KYOKINO_KARSER,
		MONSTER_ID_KYOKINO_SARAMANDRA,
		MONSTER_ID_MAZINNOSHITO_AHATO,
		MONSTER_ID_MAZINNOSHITO_SHINAIM,
		MONSTER_ID_BURINARANEA,
		MONSTER_ID_MUSPERKOLE,
		MONSTER_ID_TAIKONO_MOROC,
		MONSTER_ID_ANSOKUNO_MOROC,
		MONSTER_ID_SAISEINO_HANMAZIN,
		MONSTER_ID_ZETSUBONOKAMI_MOROC,
		MONSTER_ID_PELL,
		MONSTER_ID_SINGING_PELL,
		MONSTER_ID_SWING_PELL,
		MONSTER_ID_KISSME_PELL,
		MONSTER_ID_PIANO_ZITTER_BUG,
		MONSTER_ID_FORTE_ZITTER_BUG,
		MONSTER_ID_FORTESSISSIMO_ZITTER_BUG,
		MONSTER_ID_MAZINSEKI,
		MONSTER_ID_YUWAKUNO_MAZINNO_KAGE,
		MONSTER_ID_SAIGINO_MAZINNO_KAGE,
		MONSTER_ID_ZETSUNENNNO_MAZINNO_KAGE,
		MONSTER_ID_MAZINNO_KYOEI,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_EIYUENCHANT", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_DAICHORO_AIRIN,
		MONSTER_ID_ZYOO_FACEWORM,
		MONSTER_ID_ZYOO_FACEWORM_AKA,
		MONSTER_ID_ZYOO_FACEWORM_MIDORI,
		MONSTER_ID_ZYOO_FACEWORM_AO,
		MONSTER_ID_ZYOO_FACEWORM_KI,
		MONSTER_ID_FENRIR,
		MONSTER_ID_MAZINNO_KYOEI,
		MONSTER_ID_SARANO_GENEI,
		MONSTER_ID_IKARINO_SENCHO_PELLROCK,
		MONSTER_ID_BOSOSHITA_SENCHO_PELLROCK,
		MONSTER_ID_NOROINO_KONGEN,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_SEITAI", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_IGNISEM_CENIA,
		MONSTER_ID_HYUCKEVINE_TRIS,
		MONSTER_ID_IRENDO_EBESI,
		MONSTER_ID_CAGAK_ICARUS,
		MONSTER_ID_RAUREL_VINDER,
		MONSTER_ID_ARMAIA_DUNZE,
		MONSTER_ID_IGNISEM_CENIA_MVP,
		MONSTER_ID_SEIREN_VINSER,
		MONSTER_ID_ELEMES_GAIL,
		MONSTER_ID_MARGARETTE_SORIN,
		MONSTER_ID_CECIL_DIMON,
		MONSTER_ID_CATHERINE_KEILON,
		MONSTER_ID_HAWARD_ALTIZEN,
		MONSTER_ID_SEIREN_VINSER_MVP,
		MONSTER_ID_ELEMES_GAIL_MVP,
		MONSTER_ID_MARGARETTE_SORIN_MVP,
		MONSTER_ID_CECIL_DIMON_MVP,
		MONSTER_ID_CATHERINE_KEILON_MVP,
		MONSTER_ID_HAWARD_ALTIZEN_MVP,
		MONSTER_ID_VIRUS,
		MONSTER_ID_REMOVER,
		MONSTER_ID_GEMINI_S58,
		MONSTER_ID_SEIREN_VINSER_KYO,
		MONSTER_ID_ELEMES_GAIL_KYO,
		MONSTER_ID_MARGARETTE_SORIN_KYO,
		MONSTER_ID_CECIL_DIMON_KYO,
		MONSTER_ID_CATHERINE_KEILON_KYO,
		MONSTER_ID_HAWARD_ALTIZEN_KYO,
		MONSTER_ID_RANDEL_RORENCE,
		MONSTER_ID_GARTY_UH,
		MONSTER_ID_CHENG_RIU,
		MONSTER_ID_ARFOSIO_BASIL,
		MONSTER_ID_TRENTINI,
		MONSTER_ID_CERIA_ARDE,
		MONSTER_ID_EMUR_PURAMEL,
		MONSTER_ID_RANDEL_RORENCE_KYO,
		MONSTER_ID_GARTY_UH_KYO,
		MONSTER_ID_CHENG_RIU_KYO,
		MONSTER_ID_ARFOSIO_BASIL_KYO,
		MONSTER_ID_TRENTINI_KYO,
		MONSTER_ID_CERIA_ARDE_KYO,
		MONSTER_ID_EMUR_PURAMEL_KYO,
		MONSTER_ID_RANDEL_RORENCE_MVP,
		MONSTER_ID_GARTY_UH_MVP,
		MONSTER_ID_CHENG_RIU_MVP,
		MONSTER_ID_ARFOSIO_BASIL_MVP,
		MONSTER_ID_TRENTINI_MVP,
		MONSTER_ID_CERIA_ARDE_MVP,
		MONSTER_ID_EMUR_PURAMEL_MVP,
		MONSTER_ID_WISH_MASCOT,
		MONSTER_ID_ARTIS_MASCOT,
		MONSTER_ID_SEIREN_VINSER_GOKU,
		MONSTER_ID_CATHERINE_KEILON_GOKU,
		MONSTER_ID_CECIL_DIMON_GOKU,
		MONSTER_ID_MARGARETTE_SORIN_GOKU,
		MONSTER_ID_ELEMES_GAIL_GOKU,
		MONSTER_ID_HAWARD_ALTIZEN_GOKU,
		MONSTER_ID_RANDEL_RORENCE_GOKU,
		MONSTER_ID_CERIA_ARDE_GOKU,
		MONSTER_ID_ARFOSIO_BASIL_GOKU,
		MONSTER_ID_TRENTINI_GOKU,
		MONSTER_ID_CHENG_RIU_GOKU,
		MONSTER_ID_GARTY_UH_GOKU,
		MONSTER_ID_EMUR_PURAMEL_GOKU,
		MONSTER_ID_SEIREN_VINSER_GOKU_TSUYO,
		MONSTER_ID_CATHERINE_KEILON_GOKU_TSUYO,
		MONSTER_ID_CECIL_DIMON_GOKU_TSUYO,
		MONSTER_ID_MARGARETTE_SORIN_GOKU_TSUYO,
		MONSTER_ID_ELEMES_GAIL_GOKU_TSUYO,
		MONSTER_ID_HAWARD_ALTIZEN_GOKU_TSUYO,
		MONSTER_ID_RANDEL_RORENCE_GOKU_TSUYO,
		MONSTER_ID_CERIA_ARDE_GOKU_TSUYO,
		MONSTER_ID_ARFOSIO_BASIL_GOKU_TSUYO,
		MONSTER_ID_TRENTINI_GOKU_TSUYO,
		MONSTER_ID_CHENG_RIU_GOKU_TSUYO,
		MONSTER_ID_GARTY_UH_GOKU_TSUYO,
		MONSTER_ID_EMUR_PURAMEL_GOKU_TSUYO,
		MONSTER_ID_SEIREN_VINSER_GOKU_MVP,
		MONSTER_ID_CATHERINE_KEILON_GOKU_MVP,
		MONSTER_ID_CECIL_DIMON_GOKU_MVP,
		MONSTER_ID_MARGARETTE_SORIN_GOKU_MVP,
		MONSTER_ID_ELEMES_GAIL_GOKU_MVP,
		MONSTER_ID_HAWARD_ALTIZEN_GOKU_MVP,
		MONSTER_ID_RANDEL_RORENCE_GOKU_MVP,
		MONSTER_ID_CERIA_ARDE_GOKU_MVP,
		MONSTER_ID_ARFOSIO_BASIL_GOKU_MVP,
		MONSTER_ID_TRENTINI_GOKU_MVP,
		MONSTER_ID_CHENG_RIU_GOKU_MVP,
		MONSTER_ID_GARTY_UH_GOKU_MVP,
		MONSTER_ID_EMUR_PURAMEL_GOKU_MVP,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_THANATOS", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_NAGUSAMERUMONO,
		MONSTER_ID_SHIKKOSURUMONO,
		MONSTER_ID_HOGOSURUMONO,
		MONSTER_ID_KANSHISURUMONO,
		MONSTER_ID_THANATOSNO_KANASHIMI,
		MONSTER_ID_THANATOSNO_KUNO,
		MONSTER_ID_THANATOSNO_ZETSUBO,
		MONSTER_ID_THANATOSNO_ZOUO,
		MONSTER_ID_MAKENSHI_THANATOSNO_SHINENTAI,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_CHIKA_HAISUIRO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KODAINO_KUKRE,
		MONSTER_ID_SHINKAINO_KANI,
		MONSTER_ID_KODAINO_VADON,
		MONSTER_ID_SHINKAINO_CORNUTUS,
		MONSTER_ID_SHINKAINO_OBAKEGAI,
		MONSTER_ID_KODAINO_MARC,
		MONSTER_ID_KODAINO_SWORDFISH,
		MONSTER_ID_KODAINO_OVEAUNE,
		MONSTER_ID_HENINO_KAPPA,
		MONSTER_ID_HENINO_STROUF,
		MONSTER_ID_HENINO_ANOLIAN,
		MONSTER_ID_IKEINO_COELACANTH,
		MONSTER_ID_ANKOKUNO_COELACANTH,
		MONSTER_ID_HENINO_COELACANTH,
		MONSTER_ID_BOGYAKUNO_COELACANTH,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_BOKUTSUONO_DOKUTSU", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KOBUN_TAKO,
		MONSTER_ID_HYDRA,
		MONSTER_ID_STAPO,
		MONSTER_ID_YOZINBO_IKA,
		MONSTER_ID_TORYOTAKONO_ASHI,
		MONSTER_ID_TORYOTAKO,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_TOKEITO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_PANK,
		MONSTER_ID_RIDEWORD,
		MONSTER_ID_DEMON_PANK,
		MONSTER_ID_TOKEITO_KANRISHA,
		MONSTER_ID_CLOCK,
		MONSTER_ID_MIMIC,
		MONSTER_ID_ARCHER_SKELETON,
		MONSTER_ID_DEVILCH,
		MONSTER_ID_ELDER,
		MONSTER_ID_ALARM,
		MONSTER_ID_BEAR_DOLL,
		MONSTER_ID_MISTELTAIN,
		MONSTER_ID_ORGATOOTH,
		MONSTER_ID_EXCUTIONER,
		MONSTER_ID_SHINENNO_KISHI,
		MONSTER_ID_KAHRITZBARG,
		MONSTER_ID_STEMWORM,
		MONSTER_ID_BAPHOMET_JR,
		MONSTER_ID_DRAINRIER,
		MONSTER_ID_HIORC,
		MONSTER_ID_ORCARCHER,
		MONSTER_ID_ORCBABY,
		MONSTER_ID_ORCHERO,
		MONSTER_ID_ORCLORD,
		MONSTER_ID_CLAMP,
		MONSTER_ID_PENOMENA,
		MONSTER_ID_BARSURRY,
		MONSTER_ID_JORKER,
		MONSTER_ID_WHISPER,
		MONSTER_ID_NEOPANK,
		MONSTER_ID_NOROWARETA_HON,
		MONSTER_ID_NOROWARETA_HAKO,
		MONSTER_ID_TIMEKEEPER,
		MONSTER_ID_BIGBELL,
		MONSTER_ID_ARCELDER,
		MONSTER_ID_BIGBENG,
		MONSTER_ID_ALICE,
		MONSTER_ID_TIMEHOLDER,
		MONSTER_ID_OWL_MARKIS,
		MONSTER_ID_OWL_VAICOUNT,
		MONSTER_ID_WILDROSE,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_HEARTHUNTER", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_EABUL,
		MONSTER_ID_HEART_HUNTER_FW,
		MONSTER_ID_HEART_HUNTER_BC,
		MONSTER_ID_SNIPE_GUARD,
		MONSTER_ID_ASSALT_GUARD,
		MONSTER_ID_KILLER_GUARD,
		MONSTER_ID_HEART_HUNTER_LEADER,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_ROCKRIDGE", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_ROUND_RIDER,
		MONSTER_ID_SIDE_RIDER,
		MONSTER_ID_BLADE_RIDER,
		MONSTER_ID_COVOTE,
		MONSTER_ID_GALION,
		MONSTER_ID_TOP_ROUND_RIDER,
		MONSTER_ID_TOP_SIDE_RIDER,
		MONSTER_ID_TOP_BLADE_RIDER,
		MONSTER_ID_GASTER,
		MONSTER_ID_BULLILIGHT,
		MONSTER_ID_DEVILS_FINGERS,
		MONSTER_ID_CARNIVARAUS,
		MONSTER_ID_PLASMA_RAT,
		MONSTER_ID_CLAMP,
		MONSTER_ID_SANYOCHU,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_VERNAR", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_YSF01_SEIREN,
		MONSTER_ID_HEART_HUNTER_KEBIHE,
		MONSTER_ID_CUTIE,
		MONSTER_ID_ZIKKENYOTAI_MUCAR_KATA,
		MONSTER_ID_ZIKKENYOTAI_DROSERA_KATA,
		MONSTER_ID_ZIKKENYOTAI_PIKKI_KATA,
		MONSTER_ID_ZIKKENYOTAI_CONDOR_KATA,
		MONSTER_ID_ZIKKENYOTAI_METALIN_KATA,
		MONSTER_ID_ZIKKENYOTAI_MAGMALIN_KATA,
		MONSTER_ID_ZIKKENYOTAI_GOAT_KATA,
		MONSTER_ID_ZIKKENYOTAI_SAVAGE_KATA,
		MONSTER_ID_ZIKKENSETAI_MUCAR_KATA,
		MONSTER_ID_ZIKKENSETAI_DROSERA_KATA,
		MONSTER_ID_ZIKKENSETAI_PIKKI_KATA,
		MONSTER_ID_ZIKKENSETAI_CONDOR_KATA,
		MONSTER_ID_ZIKKENSETAI_METALIN_KATA,
		MONSTER_ID_ZIKKENSETAI_MAGMALIN_KATA,
		MONSTER_ID_ZIKKENSETAI_GOAT_KATA,
		MONSTER_ID_ZIKKENSETAI_SAVAGE_KATA,
		MONSTER_ID_HUMANOID_CHIMERA,
		MONSTER_ID_MATTER_CHIMERA,
		MONSTER_ID_VENOM_CHIMERA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MELORIN", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_MEROLIN,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_PAGE250", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_SWEET_NIGHTMARE,
		MONSTER_ID_MAT_DRAINRIER,
		MONSTER_ID_HOTARU_KINOKO,
		MONSTER_ID_YASURAGIWO_UBAWARESHI_SHIKI,
		MONSTER_ID_YASURAGIWO_UBAWARESHI_MOZYA,
		MONSTER_ID_YASURAGIWO_UBAWARESHI_MONO,
		MONSTER_ID_IKARINO_DRACULA,
		MONSTER_ID_BOMI,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MAZINDEN", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KOKINO_MANA,
		MONSTER_ID_SEIMEINO_MANA,
		MONSTER_ID_DAICHINO_MANA,
		MONSTER_ID_FLOST_SPIDER,
		MONSTER_ID_KYOKINO_KARSER,
		MONSTER_ID_KYOKINO_SARAMANDRA,
		MONSTER_ID_MAZINNOSHITO_AHATO,
		MONSTER_ID_MAZINNOSHITO_SHINAIM,
		MONSTER_ID_BURINARANEA,
		MONSTER_ID_MUSPERKOLE,
		MONSTER_ID_TAIKONO_MOROC,
		MONSTER_ID_ANSOKUNO_MOROC,
		MONSTER_ID_SAISEINO_HANMAZIN,
		MONSTER_ID_ZETSUBONOKAMI_MOROC,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_SCROLL_STOLE", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_ZYOO_FACEWORM,
		MONSTER_ID_ZYOO_FACEWORM_AKA,
		MONSTER_ID_ZYOO_FACEWORM_MIDORI,
		MONSTER_ID_ZYOO_FACEWORM_AO,
		MONSTER_ID_ZYOO_FACEWORM_KI,
		MONSTER_ID_T_W_O,
		MONSTER_ID_NAHT_ZEEKER,
		MONSTER_ID_POWERFULL_AMDARAIS,
		MONSTER_ID_BAKONAWA,
		MONSTER_ID_BYONGUNGO,
		MONSTER_ID_FORTE_ZITTER_BUG,
		MONSTER_ID_BUWAYA,
		MONSTER_ID_MAZINNOSHITO_AHATO,
		MONSTER_ID_MAZINNOSHITO_SHINAIM,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_OS_NIZI_SOSAKU", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_TWIN_CAPUT_CP,
		MONSTER_ID_DOLOR_CP,
		MONSTER_ID_HEART_HUNTER_BELLARE_CP,
		MONSTER_ID_MIGEL,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MIGEL", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_MIGEL,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_NOGUE_ROAD_03", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KOKA_BLAZER,
		MONSTER_ID_KOKA_NIGHTMARE_TERROR,
		MONSTER_ID_KOKA_S_DELETER,
		MONSTER_ID_KOKA_G_DELETER,
		MONSTER_ID_KOKA_EXPLOSION,
		MONSTER_ID_KOKA_KAHO,
		MONSTER_ID_KOKA_RARVAGOLEM,
		MONSTER_ID_KOKA_MUSPERKOLE,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_FROZEN_MEMORY", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_IKARINO_GAZETY,
		MONSTER_ID_IKARINO_SNOWER,
		MONSTER_ID_IKARINO_ICE_TITAN,
		MONSTER_ID_SURUDOI_ICECLE,
		MONSTER_ID_KAKUSEI_KUTORURANUCKS,
		MONSTER_ID_KYORANSHITA_BOKENSHA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_GLASTHEIM_ABYSS", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_OSENSARETA_RAYDRIC
		, MONSTER_ID_OSENSARETA_RAYDRIC_A
		, MONSTER_ID_ICE_GARGOYLE
		, MONSTER_ID_OSENSARETA_STING
		, MONSTER_ID_PRISON_BREAKER
		, MONSTER_ID_ICE_GHOST
		, MONSTER_ID_FLAME_GHOST
		, MONSTER_ID_OSENSARETA_SAMAYOUMONO
		, MONSTER_ID_OSENSARETA_DARK_LORD
		, MONSTER_ID_OSENSARETA_BURINARANEA
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MURASAKI_IRONO_SHINKAI_DOKUTSU_ZYOSO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_SHINKAINO_OBEAUNE
		, MONSTER_ID_SHINKAINO_SROPHO
		, MONSTER_ID_SHINKAINO_HANGYOZIN
		, MONSTER_ID_SHINKAINO_MARSE
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_MURASAKI_IRONO_SHINKAI_DOKUTSU_KASO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_SHINKAINO_KING_DRAMOH
		, MONSTER_ID_SHINKAINO_STROUF
		, MONSTER_ID_SHINKAINO_SEDORA
		, MONSTER_ID_SHINKAINO_SWORD_FISH
		, MONSTER_ID_SHINKAINO_PHEN
		, MONSTER_ID_SHINKAINO_DEVIACE
		, MONSTER_ID_SHINKAINO_KRAKEN
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_NEZIRIAN_TEKOKU", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_AKAIRONO_BEARDOLL
		, MONSTER_ID_KIIRONO_BEARDOLL
		, MONSTER_ID_MIDORIIRONO_BEARDOLL
		, MONSTER_ID_SHIROIRONO_BEARDOLL
		, MONSTER_ID_AOIRONO_BEARDOLL
		, MONSTER_ID_RODOGATA_PITMAN
		, MONSTER_ID_ZYANENNO_OBISIDIAN
		, MONSTER_ID_TAMASHINO_HAHEN
		, MONSTER_ID_KAGAYAKU_BEARDOLL
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_GENSONO_KITA_DOKUTSU_RUWANDA", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_INISHIENO_S_GOLEM,
		MONSTER_ID_INISHIENO_SANYOCHU,
		MONSTER_ID_INISHIENO_FLAME_SHOOTER,
		MONSTER_ID_INISHIENO_MEGALIS,
		MONSTER_ID_INISHIENO_WOOTANG_SHOOTER,
		MONSTER_ID_INISHIENO_WOOTANG_FIGHTER,
		MONSTER_ID_INISHIENO_WOOTANG_GUARD,
		MONSTER_ID_INISHIENO_TAOGUNKA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_YUGANDA_MEIKYUNO_MORI", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KONTONNO_BAPHOMET_JR,
		MONSTER_ID_KONTONNO_HUNTERFLY,
		MONSTER_ID_KONTONNO_KILLER_MANTICE,
		MONSTER_ID_KONTONNO_MANTICE,
		MONSTER_ID_KONTONNO_POPORING,
		MONSTER_ID_KONTONNO_SIDEWINDER,
		MONSTER_ID_KONTONNO_STEMWORM,
		MONSTER_ID_KONTONNO_GHOSTRING,
		MONSTER_ID_KONTONNO_ANDREA,
		MONSTER_ID_KONTONNO_ANES,
		MONSTER_ID_KONTONNO_CELICIA,
		MONSTER_ID_KONTONNO_SILVANO,
		MONSTER_ID_KONTONNO_BAPHOMET,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_NINSHIKINO_NIWA", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_GUNYAGUNYASHITA_ARINO_TAMAGO,
		MONSTER_ID_DOKYONOARU_GAIAS,
		MONSTER_ID_DOKYONOARU_FAMILIER,
		MONSTER_ID_MAZIMENA_ANDRE,
		MONSTER_ID_MAZIMENA_ANDRENO_YOCHU,
		MONSTER_ID_MAZIMENA_DENIRO,
		MONSTER_ID_MAZIMENA_PIERE,
		MONSTER_ID_MAZIMENA_HETAI_ANDRE,
		MONSTER_ID_MAZIMENA_BITATA,
		MONSTER_ID_MUKUCHINA_MAYA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_KOZAN_DUNGEON_03", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_ABYSS_MAN,
		MONSTER_ID_WHITE_PORCELIO,
		MONSTER_ID_TOXICIOUS,
		MONSTER_ID_POISONOUS,
		MONSTER_ID_GREEN_NEO_MINERAL,
		MONSTER_ID_PURPLE_NEO_MINERAL,
		MONSTER_ID_WHITE_NEO_MINERAL,
		MONSTER_ID_RED_NEO_MINERAL,
		MONSTER_ID_JEWEL,
		MONSTER_ID_JEWELY_ANT,
		MONSTER_ID_JEWGOLY_ANT,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_ABYSS_LAKE_CHIKA_DOKUTSU_04", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_TREASURE_MIMIC,
		MONSTER_ID_PURPLE_PHEROS,
		MONSTER_ID_SILVER_OSIDOS,
		MONSTER_ID_BLACK_OSIDOS,
		MONSTER_ID_BONE_PHEROS,
		MONSTER_ID_BONE_OSIDOS,
		MONSTER_ID_BONE_DATALZAURUS,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_HAIKI_ZIKKENTAI_YUGIZYO_RUDUS_4F", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_GIANT_CAPUT,
		MONSTER_ID_DOLORIAN,
		MONSTER_ID_PLAGARION,
		MONSTER_ID_DEADRE,
		MONSTER_ID_VENEDI,
		MONSTER_ID_R001_BESTIA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_NIFLHEIM_DUNGEON_KUZURETA_OPERA_HOUSE", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_DISGUISER,
		MONSTER_ID_GROTE,
		MONSTER_ID_PIERROT_ZOIST,
		MONSTER_ID_BLUE_MOON_LOLIRURI,
		MONSTER_ID_SHINO_DAIMAZYO,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_BALMUNT_TE_DAIYOKUZYO_MEDITATIO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KOSHOSHITA_SESOGATA_BETA_1_KATA,
		MONSTER_ID_KOSHOSHITA_SESOGATA_BETA_2_KATA,
		MONSTER_ID_NETTO_SWORD_FISH,
		MONSTER_ID_NETTO_PIRANHA,
		MONSTER_ID_NETTO_PHEN,
		MONSTER_ID_NETTO_MARC,
		MONSTER_ID_YOKUZYO_KANRISHA_BETA_1_KATA,
		MONSTER_ID_YOKUZYO_KANRISHA_BETA_2_KATA,
		MONSTER_ID_SEIKINNO_HIME,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_BALMUNT_TE_CHOZOKO_TARUTAROS", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KOSHOSHITA_KEBIGATA_BETA,
		MONSTER_ID_KOSHOSHITA_ZIDO_OSOZIKI_OMEGA,
		MONSTER_ID_KOSHOSHITA_SOKO_KANRISHA_BETA,
		MONSTER_ID_ZYOKYU_HEART_HUNTER_SC,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_BALMUNT_TE_DAI2_MARYOKU_HATSUDENSHO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_KYORYOKUNA_MARYOKU,
		MONSTER_ID_SURUDOI_MARYOKU,
		MONSTER_ID_MARYOKU_CHUDOKU_SANARE,
		MONSTER_ID_MARYOKU_CHUDOKU_PLAGA,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_HAIIRO_OKAMINO_MORI", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_ASH_HOPPER,
		MONSTER_ID_ASHRING,
		MONSTER_ID_GRAY_WOLF,
		MONSTER_ID_SHIGERING,
		MONSTER_ID_FIRE_WIND_KITE,
		MONSTER_ID_PHANTOM_WOLF,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_OZNO_MEIRO", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_ASH_TODO,
		MONSTER_ID_RAKESON,
		MONSTER_ID_VALTY,
		MONSTER_ID_HOT_MOL,
		MONSTER_ID_VOLCARING,
		MONSTER_ID_LAVA_TODO,
		MONSTER_ID_BURNING_FANG,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_HAIKI_ZIKKENZYO_AMISITIA", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_HENI_CHIMERA_AMITERA,
		MONSTER_ID_HENI_CHIMERA_VANILAQUS,
		MONSTER_ID_HENI_CHIMERA_FILLIA,
		MONSTER_ID_HENI_CHIMERA_LITUS,
		MONSTER_ID_HENI_CHIMERA_GALENSIS,
		MONSTER_ID_HENI_CHIMERA_NAPEO,
		MONSTER_ID_HENI_CHIMERA_FULGOR,
		MONSTER_ID_HENI_CHIMERA_LAVA,
		MONSTER_ID_HENI_CHIMERA_THE_ONE,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_SUTERARETA_ANA_01", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_DOKUTSU_CALMARING,
		MONSTER_ID_DOKUTSU_FUTOKA,
		MONSTER_ID_BABY_HALLUCIGENIA,
		MONSTER_ID_KAIZOSARETA_ZYOKYU_RGAN,
		MONSTER_ID_HAIKISARETA_GENSHI_RGAN,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;

	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_SUTERARETA_ANA_02", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_SOGAN_DOLLOCARIS,
		MONSTER_ID_MAKIKOMARETA_CHUKYU_RGAN,
		MONSTER_ID_HALLUCIGENIA,
		MONSTER_ID_TANGAN_DOLLOCARIS,
		MONSTER_ID_HAIKISARETA_CHUKYU_RGAN,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;



	CMonsterGroupDataMaker.RegisterId("MONSTER_GROUP_ID_HEBIGAMINO_NUKUMORI", monsterGroupId);
	monsterGroupData = [
		MONSTER_ID_HEART_HUNTER_AT,
		MONSTER_ID_GENSHI_RGAN,
		MONSTER_ID_SAIKAKYU_RGAN,
		MONSTER_ID_KAKYU_RGAN,
		MONSTER_ID_CHUKYU_RGAN,
	];
	MonsterGroupObj[monsterGroupId] = monsterGroupData;
	monsterGroupId++;






};



// データ上書き
if (_DATA_CREATE_MODE) {
	CMonsterGroupDataMaker.OverrideData();
}
